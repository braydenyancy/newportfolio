import { useEffect, useRef } from "react";
import { colors } from "../assets/colors";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import space from '../../assets/images/cosmos.jpg';
import earthMesh from '../assets/images/earth.jpg';

const Canvas = () => {

    const canvasRef = useRef(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        // need a scene, camera and renderer
        const scene = new THREE.Scene();
        // need div width and height
        const width = canvasRef.current.clientWidth;
        const height = canvasRef.current.clientHeight;

        // camera takes 3 arguments
        // field of view - how much of the scene is visible at once
        // aspect ratio - width divided by height, based off users browser window or the div component we set
        // view frustrum - controls which objects are visible relative to the camera itself
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(width, height);
        canvasRef.current.appendChild(renderer.domElement);

        camera.position.setZ(30);

        const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
        const material = new THREE.MeshStandardMaterial({ color: colors.teal });
        const torus = new THREE.Mesh(geometry, material);

        scene.add(torus);

        const pointLight = new THREE.PointLight(0xffffff);
        pointLight.position.set(10, 10, 10);

        const ambientLight = new THREE.AmbientLight(0xffffff);

        scene.add(pointLight, ambientLight);

        const lightHelper = new THREE.PointLightHelper(pointLight);
        scene.add(lightHelper);
        const gridHelper = new THREE.GridHelper(200, 50);
        scene.add(gridHelper);

        const controls = new OrbitControls(camera, renderer.domElement);

        function addStars() {
            const geometry = new THREE.SphereGeometry(0.25, 24, 24);
            const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
            const star = new THREE.Mesh(geometry, material);
            
            const [x, y, z] = Array(3) .fill().map(() => THREE.MathUtils.randFloatSpread(100));
            star.position.set(x, y, z);
            scene.add(star);
        }

        Array(200).fill().forEach(addStars);

        // Earth
        const earthTexture = new THREE.TextureLoader().load(earthMesh);

        const earth = new THREE.Mesh(
            new THREE.SphereGeometry(3, 32, 32),
            new THREE.MeshStandardMaterial({ map: earthTexture })
        )
        
        scene.add(earth);

        earth.position.z = 15;
        earth.position.setX(-10);

        // const spaceTexture = new THREE.TextureLoader().load(space);
        // scene.background = spaceTexture;

        const animate = () => {
            requestAnimationFrame(animate);

            torus.rotation.x += 0.01;
            torus.rotation.y += 0.005;
            torus.rotation.z += 0.01;

            controls.update();

            renderer.render(scene, camera);
        };

        animate();

    }, [])

    return (
        <div ref={canvasRef} style={{
            position: 'absolute',
            top: '8vh',
            width: '100vw',
            height: '90vh'
        }}>
            <p>
                How are yall
            </p>
        </div>
    )
}

export default Canvas;