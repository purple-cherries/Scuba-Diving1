AFRAME.registerComponent('coins', {
    init:function(){
        for(var i=1 ; i<=20 ; i++){
            var id=`coin${i}`
            var posX= (Math.random()*3000 +(-1000))
            var posZ= (Math.random()*3000 +(-1000))
            var posY= (Math.random()*2 +(-1))
            var position={x:posX,y:posY,z:posZ}      
            this.createRings(id,position)      
        }
    },

    createRings:function(id, position){
        var terrain= document.querySelector('#island')
        var coin= document.createElement('a-entity')
        coin.setAttribute('id',id)
        coin.setAttribute('position', position)
        coin.setAttribute('material', 'color','yellow')
        coin.setAttribute('geometry', {primitive:'cylinder', radius:9, height:1, rotation:'0 90 0'})
        coin.setAttribute('static-body', {shape:'sphere', sphereRadius:2})
        coin.setAttribute('game-play', {elementId:`#${id}`})
        terrain.appendChild(coin)

    }
})