import { memo, useCallback, useEffect, useRef, useState } from 'react'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { isMobile } from '../../helpers'

interface PartnerProps {
    name: string;
    href: string;
    color?: string
}

// Math.random().toString(16).slice(2, 8)?.padEnd(6, '0')
const logos: PartnerProps[] = [
    {
        name: "Bybit Web3",
        color: "#F7A600",
        href: "https://www.bybit.com/en/web3/home"
    },
    {
        name: "Moledao",
        color: "#F44527",
        href: "https://moledao.io"
    },
    {
        name: "Harvard",
        color: "#DA383D",
        href: "https://harvardblockchainclub.com/"
    },
    {
        name: "Solana",
        color: "#9945FF",
        href: "https://solana.com/"
    },
    {
        name: "ICP",
        color: "#3B00B9",
        href: "http://internetcomputer.org/"
    },
    {
        name: "CoinEasy",
        color: "#FF9372",
        href: "https://www.coineasy.xyz/"
    },
    {
        name: "AUS",
        color: "#A03021",
        href: "https://www.aus.edu/"
    },
    {
        name: "Aptos",
        color: "#cb114d",
        href: "https://aptosfoundation.org/"
    },
    {
        name: "BU ZHI DAO",
        color: "#FF4800",
        href: "https://www.buzhidao.tw/"
    },
    {
        name: "Edu3Labs",
        color: "#642f6c",
        href: "https://edu3labs.com/"
    },
    {
        name: "Libera",
        color: "#01c5ff",
        href: "https://liberaglobal.ai/"
    },
    {
        name: "XueDAO",
        href: ""
    },
    {
        name: "Alchemy",
        color: "#0B48E6",
        href: "https://www.alchemypay.org"
    },
    {
        name: "UCO Network",
        color: "#00195A",
        href: "https://www.uco.network/"
    },
    {
        name: "OKX Web3",
        href: "https://www.okx.com/web3"
    },
    {
        name: "Impactopia",
        color: "#1E1870",
        href: "https://www.impactopia.net/"
    },
    {
        name: "Bitrend",
        color: "#6D10FF",
        href: "https://bitrend.io/"
    },
    {
        name: "Wtech",
        color: "#6F36B5",
        href: "https://www.wtechlabs.xyz/"
    },
    {
        name: "Aelf",
        href: "https://aelf.com/"
    },
    {
        name: "Coinable",
        color: "#5546FF",
        href: "https://www.coinableapp.com/"
    }
]

const useHandleMouseEnter = (ref: React.RefObject<HTMLDivElement>) => {
    return useCallback(({ camera, group, event }: {
        camera: THREE.Camera,
        group: THREE.Group,
        event: MouseEvent
    }) => {
        // 计算鼠标的归一化设备坐标
        const dom = ref?.current;
        if (!dom) return
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();
        const rect = dom?.getBoundingClientRect();
        const containerX = rect.left;
        const containerY = rect.top;
        const containerWidth = rect.width;
        const containerHeight = rect.height;

        mouse.x = ((event.clientX - containerX) / containerWidth) * 2 - 1;
        mouse.y = -((event.clientY - containerY) / containerHeight) * 2 + 1;

        // 通过射线法进行碰撞检测
        raycaster.setFromCamera(mouse, camera);

        return raycaster.intersectObjects(group.children, true)
    }, [ref])
}

const useCreateTextSprite = () => {
    return useCallback((partner: PartnerProps) => {
        const size = 160;
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        if (!context) return

        const color = partner?.color || `#${ Math.random().toString(16).slice(2, 8)?.padEnd(6, '0')}`;

        const fontSize = size * 0.2;
        context.font = "bold " + fontSize + "px Arial";
        const textWidth = context.measureText(partner.name).width;

        canvas.width = textWidth;
        canvas.height = size;

        const circleRadius = size * 0.1; // 圆形半径
        const circleX = textWidth / 2; // 圆心的X坐标
        const circleY = fontSize + circleRadius + 70; // 圆心的Y坐标

        context.font = "bold " + fontSize + "px Arial";
        context.textBaseline = "middle";
        context.textAlign = "center";
        context.fillStyle = "#e5e7eb"//color;
        context.fillText(partner.name, textWidth / 2, size / 2);

        context.beginPath();
        context.arc(circleX, circleY, circleRadius, 0, 2 * Math.PI);
        context.fillStyle = color;
        context.fill();

        const texture = new THREE.CanvasTexture(canvas);
        texture.generateMipmaps = false;
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;

        const material = new THREE.SpriteMaterial({ map: texture });
        // material.color.set(color);
        material.color.set("#FFFFFF");

        const sprite = new THREE.Sprite(material);
        sprite.scale.set(textWidth, size, 1);

        sprite.userData = {
            text: partner.name,
            size: size,
            originalScale: sprite.scale.clone(),
            link: partner?.href
        };

        return sprite;
    }, [])
}

export const Partner = memo(() => {
    const ref = useRef<HTMLDivElement>(null);
    const [scene, setScene] = useState<THREE.Scene | null>(null)
    const handleMouseEnter = useHandleMouseEnter(ref);
    const createTextSprite = useCreateTextSprite();
    const mobile = isMobile();

    useEffect(() => {
        const dom = ref.current;
        if (!dom) return
        // 创建场景对象Scene
        const scene = new THREE.Scene();
        setScene(scene);
    }, [])

    useEffect(() => {
        const dom = ref.current;
        if (!dom) return
        if (!scene) return

        const width = dom.clientWidth;
        const height = dom.clientHeight;

        const camera = new THREE.PerspectiveCamera(33, width / height, 1, 10000);
        camera.position.set(0, 0, 3000);

        const group = new THREE.Group();

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(width, height);
        renderer.shadowMap.enabled = false;
        renderer.setClearColor(0x0000025, 1);
        renderer.setPixelRatio(window.devicePixelRatio);

        dom.appendChild(renderer.domElement);
        let controls = new OrbitControls(camera, renderer.domElement), selectedSprite: any = null;
        // controls.enableRotate = false;

        const list = logos.concat(logos, logos, logos)?.slice(0, 53)

        for (let i = 0, l = list?.length; i < l; i++) {
            const phi = Math.acos(-1 + (2 * i) / l);
            const theta = Math.sqrt(l * Math.PI) * phi;
            const position = new THREE.Vector3().setFromSphericalCoords(800, phi, theta);

            const sprite = createTextSprite(list[i]);
            if (!sprite) return
            sprite.position.copy(position);
            group.add(sprite);
        }

        function onMouseMove(event: MouseEvent) {
            const dom = ref.current;
            if (!dom) return
            const intersects = handleMouseEnter({ camera, group, event });

            if (intersects?.length) {
                if (selectedSprite) {
                    selectedSprite.scale.copy(selectedSprite.userData.originalScale);
                    selectedSprite = null;
                }

                const sprite = intersects?.[0]?.object;
                sprite.scale.multiplyScalar(2);
                selectedSprite = sprite;
                dom.style.cursor = 'pointer'
            } else if (selectedSprite) {
                selectedSprite.scale.copy(selectedSprite.userData.originalScale);
                selectedSprite = null;
                dom.style.cursor = 'auto'
            }
        }

        let isRotating = false;

        controls.addEventListener('change', () => {
            isRotating = true;
        });

        function onMouseClick(event: MouseEvent) {
            if (isRotating) {
                isRotating = false;
            } else {
                const intersects = handleMouseEnter({ camera, group, event });
                const sprite = intersects?.[0]?.object;

                if (intersects?.length && sprite?.userData?.link) {
                    window.open(sprite.userData.link, "_blank");
                }
            }
        }

        function render() {
            if (!scene) return
            renderer.render(scene, camera);
            group.rotateY(-0.001);
            group.rotateX(0.001);

            group.children.forEach(function (child) {
                if (child instanceof THREE.Mesh) {
                    child.lookAt(camera.position);
                }
            });

            controls.update();
            requestAnimationFrame(render);
        }
        scene.add(group);

        render();

        window.addEventListener('mousemove', onMouseMove, false);
        window.addEventListener('click', onMouseClick, false);

        return () => {
            while (dom.firstChild) {
                dom.removeChild(dom.firstChild);
            }
            window.removeEventListener('mousemove', onMouseMove, false);
            window.removeEventListener('click', onMouseClick, false);
        }
    }, [scene])

    return (
        <div style={{ width: mobile ? "100vw" : 1232, height: 800 }} ref={ref} />
    )
})