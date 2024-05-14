import { memo, useCallback, useEffect, useRef, useState } from 'react'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { isMobile } from '../helpers'

interface PartnerProps {
    name: string;
    href: string;
}

const logos: PartnerProps[] = [
    {
        name: "Bybit Web3",
        href: "https://www.bybit.com/en/web3/home"
    },
    {
        name: "Moledao",
        href: "https://moledao.io"
    },
    {
        name: "Harvard",
        href: "https://harvardblockchainclub.com/"
    },
    {
        name: "Solana",
        href: "https://solana.com/"
    },
    {
        name: "Dfinity",
        href: "http://internetcomputer.org/"
    },
    {
        name: "CoinEasy",
        href: "https://www.coineasy.xyz/"
    },
    {
        name: "AUS",
        href: "https://www.aus.edu/"
    },
    {
        name: "Aptos",
        href: "https://aptosfoundation.org/"
    },
    {
        name: "BZD",
        href: "https://www.buzhidao.tw/"
    },
    {
        name: "Edu3Labs",
        href: "https://edu3labs.com/"
    },
    {
        name: "Libera",
        href: "https://liberaglobal.ai/"
    },
    {
        name: "XueDAO",
        href: ""
    },
    {
        name: "Alchemy",
        href: "https://www.alchemypay.org"
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

        const fontSize = size * 0.25;
        context.font = "bold " + fontSize + "px Arial";
        const textWidth = context.measureText(partner.name).width;

        canvas.width = textWidth;
        canvas.height = size;

        const circleRadius = size * 0.05; // 圆形半径
        const circleX = textWidth / 2; // 圆心的X坐标
        const circleY = fontSize + circleRadius + 60; // 圆心的Y坐标

        context.font = "bold " + fontSize + "px Arial";
        context.textBaseline = "middle";
        context.textAlign = "center";
        context.fillStyle = "#283344";
        context.fillText(partner.name, textWidth / 2, size / 2);

        // 绘制圆形
        context.beginPath();
        context.arc(circleX, circleY, circleRadius, 0, 2 * Math.PI);
        context.fillStyle = `#${Math.random().toString(16).slice(2, 8)?.padEnd(6, '0')}`;
        context.fill();

        const texture = new THREE.CanvasTexture(canvas);
        texture.generateMipmaps = false;
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;

        const material = new THREE.SpriteMaterial({ map: texture });
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

        // 光源设置
        const point = new THREE.PointLight(0xffffff);
        point.position.set(400, 200, 300); //点光源位置

        //环境光
        const ambient = new THREE.AmbientLight(0x444444);
        scene.add(ambient);

        const width = dom.clientWidth;
        const height = dom.clientHeight;

        const camera = new THREE.PerspectiveCamera(33, width / height, 1, 10000);
        camera.position.set(0, 0, 3000);

        const group = new THREE.Group();

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(width, height); //设置渲染区域尺寸
        renderer.shadowMap.enabled = false;
        renderer.setClearColor(0xe5e7eb, 1); //设置背景颜色
        renderer.setPixelRatio(window.devicePixelRatio);

        dom.appendChild(renderer.domElement);
        let controls = new OrbitControls(camera, renderer.domElement), selectedSprite: any = null;
        // controls.enableRotate = false;

        const list = logos.concat(logos, logos)

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

        function onMouseClick(event: MouseEvent) {
            const intersects = handleMouseEnter({ camera, group, event });
            const sprite = intersects?.[0]?.object;

            if (intersects?.length && sprite?.userData?.link) {
                window.open(sprite.userData.link, "_blank");
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
        <div style={{ width: mobile ? "100vw" : 800, height: 500 }} ref={ref} />
    )
})