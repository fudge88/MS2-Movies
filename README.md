
# **Movie Muncher**

-------------------------

### **JavaScript & Interactive front-end Development**

This website is created to allow the user to interact with the website in search of  information on movies.

Movie Muncher is a Movie database search engine, which is user led. This website  
requires direct input from the user, in order to display results relating to their search.  
My task at hand was to create a website using HTML, CSS, and JavaScript, with the option  
of using  JavaScript libraries, and external APIs to create a significantly interactive website.  
The main criteria  for this project was to show an understanding of some of the functionalities  
JavaScript provides, and  how it can enhance user experience.   

-------------------------

## **UX**

As a user I would want the website to be simple and easy to use. I would like for  
the website to be  aesthetically pleasing, and somehow represent the website purpose;  
this would enhance the experience for users of all ages and reinforce the purpose of  
the website.  

The users for a website of such a nature are most likely to know what they are looking for,  
which is why a simple approach suits the layout of the website. Rather then having  
to navigate through several tabs, and clicking through lists to find the movie  
you are looking for, a search box facilitates relevant, streamlined results. This enhances  
the user experience as instant results are delivered, with information that is useful  
to them.  

The website also offers an additional service, where ‘sort’ buttons have been provided  
to arrange the search results according to the user’s preference. This would benefit  
the user as they would be able to rearrange their search results displaying the most  
recent movie first, or even in alphabetical order.  

There is an enquiry form should the user wish to contact Movie Muncher, once an enquiry  
has been sent the page then displays a message of confirmation, reassuring the user that  
their message has  been received. 

### **The colour schemes**

Given the nature of Movie Muncher I felt that a dark, cinematic feel would be appropriate.  
I chose to have the home image display the concept of the website. This image is of a  
traditional deep red cinema seat with a box of popcorn, and a blankly lit mobile phone to  
relate to the cinema; even if a user was unable to read, they would know that this website  
relates to movies. 

To keep consistent with the dark cinema room, I chose to give the navbar dark opaque  
navbar with light grey coloured font to make the words stand out. I added a hover property  
on the links, where the text on the links would enlarge and change to white, creating a  
'spotlight' feel. 

The contact us page I kept with the theme of movies, and chose an image with traditional  
film making equipment. I opted for a splash of yellow as a backdrop for this page using  
the bright colour to ‘welcome’ enquires. I chose this contrast as any contact related  
page should be kept light and  airy, to give the user an impression that we are 'happy'  
to hear from them.  

### **The walk through**

The home page is simple but inviting, it has all the tools the user needs at first glance  
to benefit from the website. The home page image represents the cinematic concept of the  
website. Upon scrolling the navbar holds a fixed position, but its opacity still allows  
the user to see all the content. The Navbar holds the website logo on the left, it is evident  
that this is the brand as it has a film icon, and is also larger in size compared to the  
navbar options. The navbar options to choose from are 'home' and 'contact us' which sit  
on the right of the navbar. Upon hovering over each of these links they grow in size and  
change colour to white, highlighting the option before the user chooses to click. 

There is a heading which reads ‘Your Movie search is here’ followed by an arrow pointing  
at the input box. The input field is nested in a dark overlay which also houses the search  
button on the right. Outside the overlay parallel to the search button, there are two  
further buttons, which are styled differently to the search button. The buttons are  
defined by a yellow background with black icons, to signify the 'sort' order, one button  
is to sort the users search results in alphabetical order, and the other button sorts the  
results into an age relevant order, from new to old. Theses buttons are also responsive  
upon hover, these buttons grow in size, and display text describing the attribute the  
buttons hold.  

Once a movie has been typed into the search box, the results appear in a scrollable  
box beneath the search bar; on larger screens results of 4 are displayed on each row.  
On medium results go from 4 to 2 per row, and on small mobile screens results show as 1  
per row, with the following results available through scrolling down. 

Movie Muncher is created on one page, despite having two sections defined in the navbar  
as ‘Home’ and ‘Contact Us’. The user is able to scroll all the way to the bottom to reach  
the ‘Contact Us’ page, or they can simply click the option in the navbar which would scroll  
the page down to the relevant  section.  

There is a heading which states ‘contact us’, followed by a subheading witch a warm welcome.  
These are nested within a dark opaque overlay which focuses attention on the form, which  
consists of a ‘name’, ‘email’, and an ‘enquiry’ box. Once the form is completed there is  
a pop-up box which thanks the user for sending their enquiry, and gives an expectant time  
to have their query answered.  

The footer is also fixed to the bottom of the screen, ideally it should read copy  
right information followed by social media icons related to Movie Muncher. The background  
to the footer is transparent, for easy readability of background content. Having the  
footer fixed allows the user to gain immediate interaction with Movie Muncher at any  
given time, through the social media icons.  

I chose to keep this Movie Muncher simple to emphasis the functions the website has to  
offer. It is aesthetically simple, appeasing in design, and smart with its interactions. 

### **WireFrames**

Wireframes were created using [‘Balsamiq Wireframes 4’](https://balsamiq.com/wireframes/), this allowed me to create a computer  
and a mobile mock-up of what Movie Muncher would look like. This helped create a visual  
of how the  content would display. 

My wireframes can be seen [here](../wireframes/ms2wireframe.png).

The mobile and large screen design does not differ much, apart from the reduced content  
on the delivery of results on each row content. This was done to ensure a good customer  
experience with easy read information and design. 

------------------------- 

## **Features**

As the page consists of 2 sections, I installed scroll Spy to allow ease of navigation  
from one page to the other. This allows the user to click on the navbar option to be  
scrolled to the page of choice.  

The main feature is the interactive search bar, that responds to the keywords typed by  
the user, along with the buttons that allow the user to sort their results in the order  
they desire.  

A working form, which sends enquires to Movie Munchers admin, which invokes a successful  
message pop us, and also clearing of text to confirm the enquiry has been sent, and ready  
for another enquiry should the user need to. 

As the search results appear in a scrollable bar, I found it would be appropriate to style  
the scroll bar to fit the overall look of the website. The scroll bar has the same colour   
as the text on the website, and is now curved in appearance, completing the sleek finish.  

The responsive format of the results, created using the media queries for a more user  
friendly, easy to read display.  

### **Features left to implement**

Ideally, I would like for the user to be able to click on the image and be taken to an external  
resource, where they can get more information on the movie of interest. But due to the time  
constraints, and also the lack of Parameters OMDb provide iam unable o create thi feature at  
this moment in time. If i had more time, i would have liked to create another page where  
the user could see movies that are already populated in the order of the highest reviews, and  
popularity.

-------------------------

## **Technologies used**

HTML- hypertext markup language was used to build the basic structure of a website.  

CSS- cascading  style sheets was used to style HTML  

[Bootstrap4](https://getbootstrap.com/docs/4.0/getting-started/introduction/) compromising of HTML CSS JS libraries such as JQuery were used to implement the  
Modal, the navbar, and also supported the layout using Bootstraps grid system.  

CDNs were used to style the fonts, icons, give hover properties, and tie up the enquiry  
form by linking it to an active mail box using EmailJS. Font Awesome used for the social.  

I chose to use an external API, and decided to use [OMDb's](http://www.omdbapi.com/) open source API to call for  
information. I used JavaScript to create my functions around the API. JavaScript was  
also used to ‘sort’ the search results into two different orders; this was done using  
a ‘click’ event. 

-------------------------

## **Testing**

Jasmine testing was conducted using the red green refactor, this is available for you  
to see [here](../test/test.html), all you do is run the code, to see the results appear.  
Support was required for this aspect of testing as it was a bit tricky to understand.  
Jasmine passed the tests, but there was an error which was due to another funtion  
not used in the main.js file. Resouces such as [Tim’s Cheat Sheet](https://github.com/TravelTimN/ci-ifd-lead/blob/master/week5-jasmine/jasmine.md) supported my testing, as its fairly  
easy to get failing tests to pass, this supported  
my understanding and working of Jasmine.

With other aspects of Movie Muncher, such as the contact form, this required some manual  
testing. i followed the folloing spteps to ensure that it was working with the functions  
i had installed:
1. go to Contact Us page
2. attempted to submit and emty form, this confirmed that the fields were empty and the  
form could not be sent 
3. completed all teh fields except one, to recieve a pop up to complete a field  
4. comleted all fields and sent the enquiry to recieve a successful message on a modal.

#### [HTML Validator](https://validator.w3.org/nu/#textarea) check: complete


This showed 2 errors, 1 which has been corrected. The text area for the enquiry form  
has ‘row’ as an attribute, which is now corrected to ‘rows’. The 2nd error points out the  
EmailJS cdn to be an unnecessary resource. 

#### [CSS Validator](https://jigsaw.w3.org/css-validator/validator) check: complete 


This shows 13 warnings, 3 of which state the border and the background colour for the  
buttons are the same. And 10 warnings for -webkit and -moz which fagup to be an  
‘unknown vendor extention’, however, these were used to style my background images and  
scrollbars, as seen on [css-tricks](https://css-tricks.com/perfect-full-page-background-image/).  

#### [JS Validator](https://jshint.com/) check: complete  

**sendMail.js:** This shows one undefined variable 'emailjs', however thsi was in relation to using  
an external source to create the function of the enquiry form. There was also one unused  
variable 'sendMail, but this is used as a trigger in the index.HTML page.  

**main.js:** This showed 25 warnings based on the JS version. The warnings prompted me to  
use 'eversion: 6', where as i used ES6, and used teh arrow function syntax which  
prompted alot of warnings.

### **Table of Trial and Error**

<table>
<tbody><tr>
<th>Device</th>
<th>Images</th>
<th>Links</th>
<th>Navbar</th>
<th>Formatting Error</th>
<th>Notes</th>
</tr>
<tr>
<th>Desktop</th>
<td>yes</td>
<td>yes</td>
<td>yes</td>
<td>No Error</td>
<td>Works ok</td>
</tr>
<tr>
<th>Laptop</th>
<td>yes</td>
<td>yes</td>
<td>yes</td>
<td>No Error</td>
<td>Works ok</td>
</tr>
<tr>
<th>IPad</th>
<td>yes</td>
<td>yes</td>
<td>yes</td>
<td>No Error</td>
<td>Works ok</td>
</tr>
<tr>
<th>IPhone X</th>
<td>yes</td>
<td>yes</td>
<td>yes</td>
<td>No Error</td>
<td>Works ok</td>
</tr>
<tr>
<th>IPhone 5</th>
<td>yes</td>
<td>yes</td>
<td>yes (some links fail)</td>
<td>Some Errors</td>
<td>Sorting buttons fall under results</td>
</tr>
<tr>
<th>Samsung</th>
<td>yes</td>
<td>yes</td>
<td>yes</td>
<td>No Error</td>
<td>Works ok</td>
</tr>
<tr>
<th>Explorer</th>
<td>yes</td>
<td>yes</td>
<td>yes</td>
<td>No Error</td>
<td>Slight zoomed out appearance</td>
</tr>
<tr>
<th>Safari</th>
<td>yes</td>
<td>yes</td>
<td>yes</td>
<td>No Error</td>
<td>Works ok</td>
</tr>
<tr>
<th>Chrome</th>
<td>yes</td>
<td>yes</td>
<td>yes</td>
<td>No Error</td>
<td>Zoomed in appearance</td>
</tr>
</tbody></table>

### **My Findings**

During the use of ‘DevTools’ was handy, when styling and resizing the with CSS, it was  
also handy when finding spacing errors. However, DevTools offered a slight discrepancy  
from what Movie  Muncher actually looked like when rendered on different devices.  

I originally thought having two search results appearing on a small screen would look  
good, however using DevTools I found that it would be impractical, and require the user  
to zoom in and out of each result to get a clearer view. I now have one result displayed  
on each row, which gives the user a clearer picture of their results without having to  
put effort into seeing the content.  

I also found that the user would have click the search button before they are able  
to use their sort buttons, asthe sort buttons only work to change the order of the results  
rather then running both functions.

-------------------------

## **Deployment**

This website was deployed on GitHub Pages. Click the link to see my GitHub deployed pages.  

1. You first commit and push your code from your Gitpod working space to your GitHub  Repository. 
2. After selecting your project, this should take you to a page with your directories. 
3. There are options on a bar above, you select the ‘settings’ tab. 
4. Scroll down to the heading of ‘GitHub Pages’, select ‘master branch’ from the drop-down  menu.
5. This should refresh the page, and take you back to the top. 
6. Scroll back down to ‘GitHub Pages’ and you should now have a message reading ‘Your site is  published  
at …..’ this is followed by a link which is unique to your project. 

### **Local Deployment**

As a new developer, I would encourage other users to use my code, and make further  
improvements, or even use it to facilitate a project they may be working on. 

This can be done by clicking ‘clone or download’ on my GitHub Directory for my [MS2-Movies](https://github.com/fudge88/MS2-Movies).  
This should then lead the user to their GitPod workspace with my code ready to use. 

-------------------------

## **Credits** 

### **Content**

The contents were created by myself, the search results are pulled from an external open  
source API [OMDb](http://www.omdbapi.com/).

### **Media**

##### Background images [Dreamstime:](https://www.dreamstime.com/)

> [Home background](../images/home-bg.jpg)  
ID 176178902 © Pichaya P 

> [Contact Us background](../images/home-bg.jpg)  
ID 139246593 © 9dreamstudio 

### **Styling**

##### [Google fonts:](https://fonts.google.com/) 
Fonts used: Roboto, and Oswald

##### [Font Awesome:](https://fontawesome.com/) 

Icons used:

> Arrow pointing down: level-down-alt

> Buttons: sort amount down, sort-alpha-down, angle-double-right

> Brand icon: film

##### [Hover Collection:](http://ianlunn.github.io/Hover/)

Hover properties used:

> Hvr-grow-shadow

> Hvr-grow

### **Creating the search box:**

Inspiration taken from [Coding market](https://www.youtube.com/watch?v=FVH-tXVRErg)

### **Creating a scroll bar:**

Inspiration taken from [CSS tricks](https://css-tricks.com/the-current-state-of-styling-scrollbars/)

### **Bootstrap 4:**

> [Navbar](https://getbootstrap.com/docs/4.0/components/navbar/)

> [Modal](https://getbootstrap.com/docs/4.0/components/modal/)

> [ScrollSpy](https://getbootstrap.com/docs/4.0/components/scrollspy/)

> [Grid](https://getbootstrap.com/docs/4.0/layout/grid/)

## **Information sources** 

### **JS functions:**

Additional lessons learnt fromthe following sources:

> [Email JS](https://www.emailjs.com/)

> [Sort buttons](https://www.w3schools.com/jsref/jsref_sort.asp)

### **Understanding APIs and JavaScript:**

Additional lessons learnt fromthe following sources:

> [The coding train](https://www.youtube.com/results?search_query=api+weather+javascript)

> [Traversy media](https://www.youtube.com/watch?v=YsPqjYGauns)

> [Le Wagon](https://ondemand.lewagon.com/tracks/bootcamp-prep)

### **JSON & AJAX**

Additional lessons learnt fromthe following sources:

> [Learn web code](https://www.youtube.com/watch?v=rJesac0_Ftw)

## Acknowledgments

Mentor Ignatius for pushing me to achieve more, also advised me to incorporate sort  
buttons as well as just showcasing my API search engine and working enquiry form. 

The 'tutor me' staff at code institute who spent a lot of time, guiding me without  
giving me the answers!  

SangSoo and Ikram for guidance with the practical use, and functionalities of Movie Muncher.  

I received inspiration for this project, due to the current environment surrounding COVID-19,  
where a lot of people are resulting to NetFlix and other online sources for entertainment.  
As the project  needed to demonstrate use of an API or JavaScript, I found that a movie  
database would be the closest project I can build to online streaming.  
