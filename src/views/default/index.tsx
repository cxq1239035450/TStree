import  { defineComponent, onMounted, ref }  from 'vue'
// 引入OrbitControls

import * as THREE from 'three'

export default defineComponent({
  setup(props, ctx) {
    const threeRef = ref<InstanceType<any>>()
    function init():void{
      const scene = new THREE.Scene();
      const camera=new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight)
      
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);

      
      const geometry = new THREE.BoxGeometry( 6, 6, 6 );
      const material = new THREE.MeshBasicMaterial( {color: 0x66ff88} );
      const cube = new THREE.Mesh( geometry, material );
      scene.add( cube );
      
      camera.position.x=-30;
      camera.position.y=40;
      camera.position.z=30;
      camera.lookAt(scene.position)

      threeRef.value.appendChild( renderer.domElement);
      renderer.render(scene,camera)
    }
    onMounted(()=>{
      init()
    })
    const render = ()=>{
      return (
        <>
          <div ref={threeRef} ></div>
        </>
      )
    }
    return render
  },
})