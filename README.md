# Proyecto-Beta: Curso de Inglés en Irlanda

## **Enlace a la web:** https://ggonzaloo10.github.io/index.html

## **Objetivo**


En este proyecto se pretende crear una página web de cursos de inglés en Irlanda.

## **Herramientas:**

![image](https://user-images.githubusercontent.com/92878148/169273737-4c4980e7-0d60-46b9-822b-56c6aca19239.png)


## **Requisitos**
### **Instalación**
Debes clonar el repositorio del proyecto.
### **Contribuir**
Debes crear un pull request al proyecto.

## **Programas utilizados**
El proyecto se ha construido con los siguientes programas:
- Para el diseño:
  - <a href="https://www.figma.com/">Figma</a>: diseño de wireframes. =><a href="https://www.figma.com/file/2A9JSXvIeSVtFotWoL3yDe/Gonzalo-Soriano---Proyecto-Beta?node-id=0%3A1">Enlace al proyecto Beta en Figma</a>
<!--   - <a href="https://www.adobe.com/products/illustrator.html">Illustrator</a>: diseño de logotipo e iconos. -->
- Para el desarrollo:
  - <a href="https://code.visualstudio.com/">Visual Studio Code</a>: editor de código fuente.
  - <a href="https://parceljs.org/">Parcel Js</a>: empaquetador de aplicaciones web.

Para este proyecto, antes de comenzar con el diseño, se realizó un estudio de los diferentes tipos de usuarios potenciales. Se elaboraron los siguientes perfiles de user persona, los cuales son los más representativos de cada tipo: Estudiantes, universitarios y padres de estudiantes.

![image](https://user-images.githubusercontent.com/92878148/169265914-a221c2e6-15d7-45ee-8df4-ee4834314215.png)
![image](https://user-images.githubusercontent.com/92878148/169265594-8577768f-0179-4ccd-80dd-a1353a2628dd.png)
![image](https://user-images.githubusercontent.com/92878148/169265615-d5103a23-7579-4e39-8e9a-5d6b5f86d549.png)
![image](https://user-images.githubusercontent.com/92878148/169265640-022c1ff5-7f6f-489f-88c5-dad31229ce06.png)

Una vez establecidos los user persona, se ideó un User flow y un Sitemap para estos usuarios:

![image](https://user-images.githubusercontent.com/92878148/169267743-0b8eb87f-d754-46ff-b114-11e76308d42c.png)
![image](https://user-images.githubusercontent.com/92878148/169267860-732a78eb-fb07-426e-8de3-7861fd3f9b9a.png)




## **Nomenclatura**

### **Clases**

La convención de nombre para las clases de los elementos sigue el patrón BEM:

- .bloque{}
- .bloque__elemento{}
- .bloque--modificador{}

'.bloque' representa el primer nivel de una abstracción o componente, es el elemento padre.
'.bloque__elemento' representa un hijo del elemento padre '.bloque'.
'.bloque--modificador' representa un estado diferente de '.bloque'.

<!-- Ejemplo sacado del proyecto -->

### **Etiquetas archivos sass**

Para la localización rápida de archivos sass emplearemos etiquetas en texto comentado, por ejemplo:

- //-------$VARIABLES
- //-------$CARDS

### **camelCase en JavaScript**



## **Estructura del respositorio del proyecto**





## **SCSS**

Los archivos scss son los encargados de aportar los estilos necesarios a los elementos html, estos se encuentran organizados en la carpeta sass/.

### **Estructura del repositorio sass/**

- sass/
  - header.scss
  - footer.scss
  - site.scss
  - style.scss
  - variables.scss

El archivo main.sass nos indica el path de los elementos así como su nombre. Todos los archivos sass tienen una etiqueta para facilitar su localización mediante la búsqueda de nuestro editor (Cmd/Ctrl + f) y acceder a ellos fácilmente.


### **Variables**

Las variables que se emplearán en este proyecto se encuentra en el archivo sass/variables.scss. Estas variables globales definen los colores, el espaciado y las tipografías de todo el documento.

#### **Espaciado**

Para el espaciado la unidad base será 8px, de la cual se emplearán sus múltiplos en función del espaciado que necesitemos.

- $space-unit: 8px;
- $mini-space: $unit*1.75;
- $medium-space: $unit*2;
- $space: $unit*2.25;
- $big-space: $unit*3;
- $xl-space: $unit*4;
- $xxl-space: $unit*5;

#### **Color**

La paleta de colores a utilizar en este proyecto estará declarada de la siguiente manera.
#### **COLOR PRINCIPAL TEXTOS, TITULOS, Y DESTACADOS**
$first-color: hsla(178, 95%, 16%, 1);

#### **COLOR LOGOS Y CONTRASTES**
$logo-color: hsla(44, 99%, 64%, 1);

$white-color: white;

$second-color:hsla(29, 98%, 50%, 1);

$third-color: hsla(38, 98%, 50%, 1);

#### **Fuentes**

En cuanto a las fuentes, se han elegido estás dos. Catamaran se empleará para títulos y subtítulos. En cuanto a Montserrat se usará para el cuerpo del documento. De la misma manera se definirá el tamaño de fuente tanto de títulos como del cuerpo en función de la resolución de la pantalla.

// TIPOGRAFIAS
- $text-font: 'Montserrat', sans-serif;
- $title-font: 'Catamaran', sans-serif;
