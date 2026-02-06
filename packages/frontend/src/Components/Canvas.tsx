import { useEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { randomColor } from "../assets/colors.ts";
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import background from '../assets/videos/Space-Background-4K.mp4';
import earthMesh from '../assets/images/earth.jpg';
import cosmosMesh from '../assets/images/cosmos.jpg';

const Canvas = () => {

    const canvasRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const width = canvasRef.current.clientWidth;
        const height = canvasRef.current.clientHeight;

        // need a scene, camera and renderer
        const scene = new THREE.Scene();

        // CAMERA

        // camera takes 3 arguments
        // field of view - how much of the scene is visible at once
        // aspect ratio - width divided by height, based off users browser window or the div component we set
        // view frustrum - controls which objects are visible relative to the camera itself

        const fov = 75;
        const aspect = width / height;
        const near = 0.1;
        const far = 1000;
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

        // RENDERER
        const renderer = new THREE.WebGLRenderer(
            { antialias: true }
        );
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        canvasRef.current.appendChild(renderer.domElement);

        camera.position.setY(0.5)
        camera.position.setZ(5);

        // OLD BACKGROUND METHOD

        // const backgroundTexture = new THREE.TextureLoader().load(background);
        // scene.background = backgroundTexture;

        const video = document.createElement('video');
        video.src = background;
        video.loop = true;
        video.muted = true;
        video.playsInline = true;
        video.play();

        const videoTexture = new THREE.VideoTexture(video);
        // video was so bright needs color space adjustment
        videoTexture.colorSpace = THREE.SRGBColorSpace;
        scene.background = videoTexture;

        // LIGHTING
        const pointLight = new THREE.PointLight(0xffffff, 1.5);
        pointLight.position.set(10, 10, 10);

        const ambientLight = new THREE.AmbientLight(0xffffff, 2);

        scene.add(pointLight, ambientLight);

        // const lightHelper = new THREE.PointLightHelper(pointLight);
        // scene.add(lightHelper);
        // const gridHelper = new THREE.GridHelper(500, 50);
        // scene.add(gridHelper);

        // TORUSKNOT

        const torusTexture = new THREE.TextureLoader().load(cosmosMesh);
        const geometry = new THREE.TorusKnotGeometry(4, 1.1, 100, 16);
        const material = new THREE.MeshStandardMaterial({ map: torusTexture });
        const torusKnot = new THREE.Mesh(geometry, material);
        torusKnot.position.z = -120;
        torusKnot.position.x = -52;

        scene.add(torusKnot);

        // EARTH
        const earthTexture = new THREE.TextureLoader().load(earthMesh);

        const earth = new THREE.Mesh(
            new THREE.SphereGeometry(3, 32, 32),
            new THREE.MeshStandardMaterial({ map: earthTexture })
        )

        scene.add(earth);
        earth.position.z = -24;
        earth.position.setX(12);

        // ORBIT CONTROLS

        // const controls = new OrbitControls(camera, renderer.domElement);


        // RANDOM CUBES
        const boxes: THREE.Mesh[] = [];

        function addBoxes() {
            const geometry = new THREE.BoxGeometry(2, 2, 2);
            const material = new THREE.MeshStandardMaterial({
                color: randomColor(),
                wireframe: true,
            });
            const box = new THREE.Mesh(geometry, material);

            const [x, y, z] = Array(3).fill(null).map(() => THREE.MathUtils.randFloatSpread(100));
            box.position.set(x, y, z);
            scene.add(box);
            boxes.push(box);
        }


        // RANDOM STARS

        function addStars() {
            const geometry = new THREE.SphereGeometry(0.25, 24, 24);
            const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
            const star = new THREE.Mesh(geometry, material);
            const [x, y, z] = Array(3).fill(null).map(() => THREE.MathUtils.randFloatSpread(100));
            star.position.set(x, y, z);
            scene.add(star);
        }

        Array(200).fill(null).forEach(addBoxes);
        Array(200).fill(null).forEach(addStars);

        // LOAD TOILET PAPER DISPENSER MODEL

        let toiletPaperModel: THREE.Group | null = null;

        const toiletPaperLoader = new GLTFLoader();

        toiletPaperLoader.load('/assets/models/toilet_paper_dispenser/scene.gltf',
            (gltf) => {
                toiletPaperModel = gltf.scene;
                // x, y, z position
                toiletPaperModel.position.setX(0)
                toiletPaperModel.position.setY(0)
                toiletPaperModel.position.setZ(28)

                toiletPaperModel.scale.set(25, 25, 25);

                scene.add(toiletPaperModel);
                tl
                    .to(toiletPaperModel.position, { x: -12, y: 10, z: 4, duration: 4 }, 'thirdPosition')
                    .to(toiletPaperModel.position, { x: -12, y: 10, z: -120, duration: 4 }, '<')
            },
            undefined,
            (error) => {
                console.error("Faileed to load toilet paper dispenser model", error)
            }
        )

        let reactLogoModel: THREE.Group | null = null;

        const reactLogoLoader = new GLTFLoader();

        reactLogoLoader.load('/assets/models/react_logo/scene.gltf',
            (gltf) => {
                reactLogoModel = gltf.scene;

                reactLogoModel.position.z = -80;
                reactLogoModel.position.x = -52;
                reactLogoModel.scale.set(2.5, 2.5, 2.5);
                scene.add(reactLogoModel);
                tl
                .to(reactLogoModel.position, { x: 12, y: 8, z: -12, duration: 4 }, 'secondPosition')
                // .to(reactLogoModel.position, { x: 50, y: 50, z: 50, duration: 4 }, '<')

            },
            undefined,
            (error) => {
                console.error('Failed to load React logo model', error)
            }
        )


        // GSAP CONTROLS
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.outletDiv',
                start: "top top",
                end: "bottom+=3000 top",
                scrub: 1,
                scroller: '.outletDiv',
                // markers: true,
            }
        });

        // second position
        // dont forget the '<' syntax to sync animations with previous ones
        tl
            .addLabel("secondPosition")
            .to(camera.position, { x: -4, z: 20, duration: 4 })
            .to(earth.position, { x: -24, y: -4, z: 4, duration: 4 }, '<')
            .to(earth.scale, { x: 2, y: 2, z: 2, duration: 4 }, '<')
            .to(torusKnot.position, { x: -12, y: 32, z: -120, duration: 4 }, '<')

            // third position
            .addLabel("thirdPosition")
            .to(camera.position, { y: 24, duration: 4 })
            .to(camera.rotation, { x: -1, duration: 4 }, '<')
            .to(earth.position, { x: -50, z: 50, duration: 4 }, '<')
            // .to(torusKnot.position, { x: 50, y: 50, z: 50, duration: 4 }, '<')

            // fourth position
            .addLabel("fourthPosition")

        // ANIMATION LOOP

        // RESIZE HANDLER
        const handleResize = () => {
            if (!canvasRef.current) return;
            
            const newWidth = canvasRef.current.clientWidth;
            const newHeight = canvasRef.current.clientHeight;
            
            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
            
            renderer.setSize(newWidth, newHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        };

        window.addEventListener('resize', handleResize);

        const animate = () => {
            requestAnimationFrame(animate);

            // earth animation
            earth.rotation.x += 0.01;
            earth.rotation.z += 0.01;

            // torus animation
            torusKnot.rotation.x += 0.01;
            torusKnot.rotation.y += 0.005;

            // tp animation
            if (toiletPaperModel) {
                toiletPaperModel.rotation.x += 0.01;
                toiletPaperModel.rotation.z += 0.01;
            }

            // react logo aninmation
            if (reactLogoModel) {
                reactLogoModel.rotation.y += 0.01;
                // reactLogoModel.rotation.z += 0.01;
            }

            boxes.forEach(box => {
                box.rotation.x -= 0.01;
                box.rotation.y -= 0.01;
            });

            // controls.update();

            renderer.render(scene, camera);
        };

        animate();

    }, [])

    return (
        <>
            <div ref={canvasRef} style={{
                position: 'absolute',
                width: '100vw',
                height: '100vh'
            }}>
            </div>
        </>
    )
}

export default Canvas;