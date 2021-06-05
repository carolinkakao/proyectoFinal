
<template>
  <b-container>
    <b-row style="height: 100vh">
      <b-col class="m-auto border p-4" cols="12" md="4">
      <div class="button-box">
        <div id="btn"></div>
      <b-button class="  boton-inicio" >Inicio Sesión</b-button>
      </div> 
      <div class="iconos-redes">
         <img alt="Vue logo" src="../assets/733547.png" />
         <img alt="Vue logo" src="../assets/733579.png" />
         <img alt="Vue logo" src="../assets/2111463.png" />
      </div>
    <!--input-usuario-->
    <b-input-group class="mb-2">
      <b-input-group-prepend is-text>
        <b-icon icon="person-fill"></b-icon>
      </b-input-group-prepend>
      <b-form-input type="text" placeholder="Usuario"></b-form-input>
    </b-input-group>
     <!--input-contraseña-->
      <b-input-group class="mb-2">
      <b-input-group-prepend is-text>
        <b-icon icon="lock-fill"></b-icon>
      </b-input-group-prepend>
      <b-form-input type="text" placeholder="Contraseña"></b-form-input>
    </b-input-group>
        <div>
    <b-form-checkbox
    class="text-center"
      id="checkbox-1"
      name="checkbox-1"
    >
    Recordar contraseña
    </b-form-checkbox>

  </div>
  

        <b-button  variant="success" class=" boton-entrar me-3 mt-4"
          >Inicio Sesión</b-button>
         

        <p>¿Olvidaste la contraseña? Recupérala aquí.</p>    
       
         
      </b-col>
    </b-row>
  </b-container>
</template>
<style lang="scss">
.button-box{
  width: 220px;
  margin: 35px auto;
  position:relative;
  box-shadow: 0 0 20px 9px #ff61241f;
  border-radius: 30px;
}
.boton-inicio{
  padding: 10px 60px;
  position:relative;
  cursor:pointer;
  background: transparent;
  border:0;
  outline:none;
 

}
#btn{
  top:0;
  left:0;
  position:absolute;
  width: 220px;
  height: 100%;
  background: linear-gradient(to right,#0dcaf0,#06b0ff);
  border-radius: 30px;
 
}
.iconos-redes{
  margin:30px auto;
  text-align: center;
}
.iconos-redes img{
  width: 30px;
  margin:0 12px;
  box-shadow: 0 0 20px 0 #7f7f7f3d;
  cursor:pointer;
  border-radius:50%;
}
.boton-entrar{
  width:85%;
  padding:10px 30px;
  cursor:pointer;
  display:block;
  margin:auto;
  background:linear-gradient(to right,#0dcaf0,#06b0ff);
  border:0;
  outline:none;
  border-radius: 30px;
}



</style>