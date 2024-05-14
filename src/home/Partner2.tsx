import AUS from '../assets/partner/AUS Logo 1.png'
import DFINITY from '../assets/partner/AE _ full color blck.png'
import Harvard from '../assets/partner/Harvard Blockchain Logo.png'
import moledao from '../assets/partner/moledao Logo (H) 1.png'
import BybitWeb3 from '../assets/partner/Bybit Web3.png'
import CoinEasy from '../assets/partner/CoinEasy Logo 1.png'
import solanaVerticalLogo from '../assets/partner/solanaVerticalLogo.png'
import Aptos_Primary_BLK from '../assets/partner/Aptos_Primary_BLK.png'
import BZD from '../assets/partner/BZD.jpeg'
import Edu3Labs from '../assets/partner/Edu3Labs.jpeg'
import Libera_logo_new_3a from '../assets/partner/Libera_logo_new_3a.png'
import XueDAO from '../assets/partner/XueDAO logo 去背.png'
import Alchemy from '../assets/partner/Alchemy Pay Logo Horizontal_Black.svg'
import { memo, useCallback, useEffect, useRef, useState } from 'react'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const logos = [
    {
        src: BybitWeb3,
        alt: "Bybit Web3",
        width: "134px",
        height: "24px",
        href: "https://www.bybit.com/en/web3/home"
    },
    {
        src: moledao,
        alt: "moledao",
        width: "128px",
        height: "26px",
        href: "https://moledao.io"
    },
    {
        src: Harvard,
        alt: "Harvard",
        width: "152px",
        height: "38px",
        href: "https://harvardblockchainclub.com/"
    },
    {
        src: solanaVerticalLogo,
        alt: "solana",
        width: "90px",
        height: "38px",
        href: "https://solana.com/"
    },
    {
        src: DFINITY,
        alt: "DFINITY",
        width: "160px",
        height: "30px",
        href: "http://internetcomputer.org/"
    },
    {
        src: CoinEasy,
        alt: "CoinEasy",
        width: "103.7px",
        height: "17px",
        href: "https://www.coineasy.xyz/"
    },
    {
        src: AUS,
        alt: "AUS",
        width: "193px",
        height: "22px",
        href: "https://www.aus.edu/"
    },
    {
        src: Aptos_Primary_BLK,
        alt: "Aptos",
        width: "90px",
        height: "22px",
        href: "https://aptosfoundation.org/"
    },
    {
        src: BZD,
        alt: "BZD",
        width: "60px",
        height: "60px",
        href: "https://www.buzhidao.tw/"
    },
    {
        src: Edu3Labs,
        alt: "Edu3Labs",
        width: "120px",
        height: "60px",
        href: "https://edu3labs.com/"
    },
    {
        src: Libera_logo_new_3a,
        alt: "Libera",
        width: "60px",
        height: "60px",
        href: "https://liberaglobal.ai/"
    },
    {
        src: XueDAO,
        alt: "XueDAO",
        width: "120px",
        height: "60px",
        href: ""
    },
    {
        src: Alchemy,
        alt: "Alchemy",
        width: "200px",
        height: "100px",
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
    return useCallback((text: string) => {
        const size = 160;
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        if (!context) return
        canvas.style.cursor = 'pointer';

        const fontSize = size * 0.25;
        context.font = "bold " + fontSize + "px Arial";
        const textWidth = context.measureText(text).width;

        canvas.width = textWidth;
        canvas.height = size;
        canvas.style.cursor = "pointer";

        context.font = "bold " + fontSize + "px Arial";
        context.textBaseline = "middle";
        context.textAlign = "center";
        context.fillStyle = "#283344";
        context.fillText(text, textWidth / 2, size / 2);

        const texture = new THREE.CanvasTexture(canvas);
        texture.generateMipmaps = false;
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;

        const material = new THREE.SpriteMaterial({ map: texture });
        const sprite = new THREE.Sprite(material);
        sprite.scale.set(textWidth, size, 1);

        sprite.userData = {
            text: text,
            size: size,
            originalScale: sprite.scale.clone(),
            link: `https://www.moledao.io/#/event/${text}`,
            canvas: canvas,
        };

        return sprite;
    }, [])
}

export const Partner = memo(() => {
    const ref = useRef<HTMLDivElement>(null);
    const [scene, setScene] = useState<THREE.Scene | null>(null)
    const handleMouseEnter = useHandleMouseEnter(ref);
    const createTextSprite = useCreateTextSprite();

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

        dom.appendChild(renderer.domElement); //将 canvas 添加到容器中
        let controls = new OrbitControls(camera, renderer.domElement), selectedSprite: any = null;;

        function addText(text: string, position: THREE.Vector3) {
            const sprite = createTextSprite(text);
            if (!sprite) return
            sprite.position.copy(position);
            group.add(sprite);
        }

        function addCircle(position: THREE.Vector3) {
            const geometry = new THREE.CircleGeometry(8, 60);
            const color = Math.random() * 0xffffff;
            const material = new THREE.MeshBasicMaterial({ color });
            const circle = new THREE.Mesh(geometry, material);
            circle.position.copy(position);
            circle.position.y -= 35;
            group.add(circle);
        }

        const list = logos.concat(logos, logos)

        for (let i = 0, l = list?.length; i < l; i++) {
            const logo = list[i];
            const phi = Math.acos(-1 + (2 * i) / l);
            const theta = Math.sqrt(l * Math.PI) * phi;
            const position = new THREE.Vector3().setFromSphericalCoords(800, phi, theta);

            addText(logo?.alt, position);
            addCircle(position);
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
        <div style={{ width: 800, height: 500 }} ref={ref} />
    )
})