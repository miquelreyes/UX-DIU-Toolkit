/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019    */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU3.MQ";
        $scope.Curso ="2019/20";
        $scope.Github_ID ="https://github.com/miquelreyes/DIU20";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Andrés Pérez",
				Photo: "andres_perez.png",
				Quote: "Bueno, bonito y barato",
				Age: 26,
				Occupation: "Dependiente y estudiante.",
				Family: "Soltero.",
				Location: "Granada, España.",
				Character: "Eficiente y ahorrador",
				PersonalityTraits: [
					{ Name: "Introvertido VS  Extrovertido ", Value: 3 },
					{ Name: "Pasivo  VS    Activo", Value: 1 },
					{ Name: "Racional  VS   Intuitivo", Value: 3 }
				], 
				Goals: ["Música y entretenimiento a buen precio.", "Conocer gente y música nueva."],
				Frustrations: ["Conciertos demasiado caros.", "Oferta cultural repetitiva y aburrida."],
				Bio: "Andrés es un joven granadino que está estudiando un módulo y a la vez necesita trabajar de dependiente a media jornada para cubrir sus gastos. Le encanta la música, sobretodo en directo, pero normalmente es incapaz de pagar el coste de un concierto o festival. Además está cansado de ver siempre anunciados conciertos de los mismos artistas. Busca una manera de acceder a música en directo y conocer nuevos cantantes y grupos de la escena pero sin descuidar su bolsillo.",
				Tech: [
					{ Name: "TIC/Internet", Value: 3 },
					{ Name: "Movil", Value: 4 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 2 }
					
				], 
                Contextos: "Lleva tiempo cansado de tener los mismos planes o tener que gastarse mucho dinero para ir a algún concierto",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 2 },
					{ Name: "Online & Social Media", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Maribel González",
				Photo: "maribel_gonzalez.png",
				Quote: "Reinventarse o morir",
				Age: 43,
				Occupation: "Dueña de un bar",
				Family: "Divorciada con 2 hijos",
				Location: "Madrid, España.",
				Character: "Emprendedora.",
				PersonalityTraits: [
					{ Name: "Introvertido VS  Extrovertido ", Value: 4 },
					{ Name: "Pasivo  VS    Activo", Value: 5 },
					{ Name: "Racional  VS   Intuitivo", Value: 3 }
				], 
				Goals: ["Encontrar una nueva fuente de ingresos.", "Renovar el ambiente de su bar.", "Atraer a nuevos tipos de clientes."],
				Frustrations: ["Las complicaciones de organizar eventos ella sola.", "No estar metida en la escena musical y no tener contactos de artistas."],
				Bio: "Maribel es la dueña y principal encargada de un bar de Malasaña desde hace más de 15 años. Es una persona inquieta que está siempre buscando nuevas maneras de hacer negocio y de actualizarse a los nuevos tiempos. Siempre intenta renovarse a si misma y a su bar y ahora busca acoger eventos como conciertos en su local sin las complicaciones que implica ser un organizador o entrar en contacto y contratar artistas.",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Mobile", Value: 3 },
					{ Name: "RRSS", Value: 2 },
					{ Name: "Software", Value: 1 }
					
				], 
                Contextos:   "Acoger eventos sin los dolores de cabeza de un organizador." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 4 },
					{ Name: "Online & Social Media", Value: 2 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])