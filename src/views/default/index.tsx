import  { defineComponent, onMounted, reactive, ref }  from 'vue'
// 引入OrbitControls

import * as THREE from 'three'

export default defineComponent({
  setup(props, ctx) {
    const threeRef = ref<InstanceType<any>>()
    interface positionType {
      [key:string]:number
    }
    const position:positionType = reactive({
      x:1,
      y:1,
      z:30
    })
    function init(DOM:Element|null):void{
      const scene = new THREE.Scene();
      const camera=new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight)
      
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);

      const BoxGeometry = new THREE.BoxGeometry( 6, 6, 6 );
      const BoxMaterial = new THREE.MeshBasicMaterial( {color: 0x222b88} );
      const cube = new THREE.Mesh( BoxGeometry, BoxMaterial );
      scene.add( cube );

      const geometry = new THREE.SphereGeometry( 4, 32, 16 );
      const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
      const sphere = new THREE.Mesh( geometry, material );
      scene.add( sphere );


      
      camera.position.x = position.x;
      camera.position.y = position.y;
      camera.position.z = position.z;
      camera.lookAt(scene.position)
      // const Buffer = new THREE.LightShadow(camera);
      
      setInterval(()=>{
        if(position.x<60&&position.z>0){
          position.x++
          position.y--
        } else if(position.y<60) {
          position.y++
          position.z--
        }else if(position.z<60){
          position.x--
          position.z++
        }

        camera.position.x = position.x;
        camera.position.y = position.y;
        camera.position.z = position.z;
        camera.lookAt(scene.position)
        renderer.render(scene,camera)
      },100)

      if(DOM){
        threeRef.value.removeChild(DOM)
      }
      threeRef.value.appendChild(renderer.domElement);
      renderer.render(scene,camera)
      window.onresize = ()=>{
        init(renderer.domElement)
      }
    }
    onMounted(()=>{
      init(null)
    })
    const render = ()=>{
      return (
        <>
        <div>
          <div>{position.x}</div>
          <div>{position.y}</div>
          <div>{position.z}</div>
          <div ref={threeRef}></div>
        </div>
        </>
      )
    }
    return render
  },
})