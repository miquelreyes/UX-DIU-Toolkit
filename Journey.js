/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU3.MQ";
        $scope.Curso ="2019/20";
        $scope.Github_ID ="https://github.com/miquelreyes/DIU20";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*************************************/
                
				Id: 0,
				Name: "Andrés Pérez",
                Photo: "andres_perez.png",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere asistir a algún concierto.",
                touch1: "Móvil (páginas web de salas de conciertos).",
                feel1: "2",
                con1: "Todos los conciertos en sala son muy caros.",
                ima1: "cartoon-phone.png",
				
                /*** PASO #2: DECISION ***/ 
                goal2: "Busca en internet como ir a conciertos baratos.",
                touch2: "Móvil (buscador).",
                feel2: "3",
                con2: "Encuentra varias páginas de compartición de ocio, en este caso música.",
                ima2: "cartoon-looking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decide usar la que más le llama la atención.",
                touch3: "Móvil (web).",
                feel3: "4",
                con3: "No tienen aplicación movil, solo en navegador.",
                ima3: "cartoon-phone.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Busca un concierto que le parezca interesante para esta semana.",
                touch4: "Móvil (web).",
                feel4: "2",
                con4: "No hay demasiados conciertos en su ciudad en las próximas semanas.",
                ima4: "cartoon-KO.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Ve que puede suscribirse a una newsletter para que le avisen cuando se organicen eventos cerca de su ciudad.",
                touch5: "Móvil (web).",
                feel5: "4",
                con5: "Tendrá que esperar o seguir buscando en otras web.",
                ima5: "cartoon-phone.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Ahora estará pendiente de los posibles planes que le puedan surgir.",
                touch6: "Móvil.",
                feel6: "3",
                con6: "Aun no tiene planes para esta semana pero seguirá buscando.",
                ima6: "cartoon-resting.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /*************************************/
                
				Id: 1,
				Name: "Maribel González",
                Photo: "maribel_gonzalez.png",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere programar algún evento para darle vida a su bar.",
                touch1: "Periódico.",
                feel1: "3",
                con1: "No sabe con quien hablar o qué hacer.",
                ima1: "cartoon-why.png",
                
                /*** PASO #2: DECISION ***/ 
                goal2: "Le pregunta a un hijo suyo si conoce algún artista freelance.",
                touch2: "Hijo.",
                feel2: "4",
                con2: "Le cuenta la existencia de apps de compartición de ocio.",
                ima2: "cartoon-speaking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Se mete en una de las primeras webs que le salen.",
                touch3: "Móvil (web).",
                feel3: "3",
                con3: "Permite a la gente acordar con artistas para darles un sitio donde tocar.",
                ima3: "cartoon-looking.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Se crea una cuenta y contacta con uno de los artistas que cobran menos para contratarle un día y probar qué tal.",
                touch4: "Móvil (web y llamada).",
                feel4: "2",
                con4: "Hay mucha oferta de artistas y no está segura de cuál encaja mejor con sus intereses.",
                ima4: "cartoon-phoning.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Empiezan a acordar un día y las condiciones.",
                touch5: "Móvil (llamada).",
                feel5: "3",
                con5: "El artista le pide más de lo esperado",
                ima5: "cartoon-shaking.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "El artista tocará la semana siguiente y empieza a anunciar el evento a sus clientes y cuelga carteles avisando.",
                touch6: "Clientes.",
                feel6: "4",
                con6: "Está contenta porque el artista se encarga de todo el material de sonido y no tiene que organizar nada especial más que guardarle sitio en el bar.",
                ima6: "cartoon-going.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



