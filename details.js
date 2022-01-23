var reviews = [
      {
         id: 1,
         name: "Chandan Roy Boruah",
         job: "class leader",
         img: "https://media.istockphoto.com/photos/hiker-on-top-of-the-mountain-enjoying-sunset-picture-id1284549418?b=1&k=20&m=1284549418&s=170667a&w=0&h=3LP-ngMkpGNWH605WJWUkvyYK7uYPHsiIXVs69yz0I4=",
         text: "in delivering complete end-to-end solutions that meet a variety of business and technology requirements",
      },
      {
         id: 2,
         name: "Gyan Jyoti Dutta",
         job: "Electronics Engineer",
         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTisiyvbCZpcDTGYaGLY1ZtY_pG46ROws0eXw&usqp=ChdkdfAU",
         text:  "in delivering complete end-to-end solutions that meet a variety of business and technology requirements ",
      },
      {
         id: 3,
         name: "Suraj mishra",
         job: "Class teacher",
         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-DfHpYeqiq9bsGeGsTr2gi-SH6R6B6925Hg&usqp=CAU",
         text:"in delivering complete end-to-end solutions that meet a variety of business and technology requirements",
      },
      {
         id: 4,
         name: "Raj yadav",
         job: "Electronics Engineer",
         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZYdiS6o83xt08rKMnams6WzHDiETtxkYcTg&usqp=CAU",
         text: "in delivering complete end-to-end solutions that meet a variety of business and technology requirements",
      },
      {
         id: 5,
         name: "Bitu sharma",
         job: "Profesor",
         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92eisuWOx3tEjeW14mT9ACVgXDwIRBGtnww&usqp=CAU",
         text: "in delivering complete end-to-end solutions that meet a variety of business and technology requirements",
      },
   ];
   
   
   var imgElement = document.getElementById('person-img');
   var author = document.getElementById('author');
   var job = document.getElementById('job');
   var info = document.getElementById('info');
   var prevBtn = document.querySelector("#prev-btn");
   var nextBtn = document.querySelector("#next-btn");
   var randomBtn = document.querySelector(".random-btn");
   
   
   // random index for the first one or front
   var currentIndex = 0;
   
   
   // To change the image to first person in reviews
   // example currenty the first image in reviews is Kaushik's Image
   // So it will change to Kaushik's Image
   //img.src = reviews[0].img;
   //  or
   
   
   // Reviews objects are stored into an array
   // index of that array will start from 0 as set current index is set to 0.
   // By updateUserDetails()
   
   
   prevBtn.addEventListener("click", prevClick);
   
   
   function prevClick() {
      if(currentIndex === 0 ) {
         currentIndex = reviews.length - 1;
      } else {
         currentIndex --;
      }
      updateUserDetails();
   }
   
   
   
   nextBtn.addEventListener("click", nextClick);
   
   
   function nextClick() {
      if(currentIndex === reviews.length - 1) { // To repeat when object got finished
         currentIndex = 0;
      } else {
         currentIndex ++;
      }
      updateUserDetails();
   }
   
   // To change currentIndex value every clicking of next and prev button
   // we have to put every details of the reviews objext
   //  in the both function nextclick() and function preClick() 
   // so to avoid it we will create this function so that
   // we didnot have to write these to everywhere
   
   function updateUserDetails() {
      imgElement.src = reviews[currentIndex].img;
      author.innerText = reviews[currentIndex].name;
      job.innerText = reviews[currentIndex].job;
      info.innerText = reviews[currentIndex].text;
   }
   
   
   // For random we have to create random number 
   // To create random number
   // Math.random but it will creat random number between 0 to 1
   // so Math.floar will convert the number into nearest decimal
   // we used * to get bigger number 
   
   // console.log(Math.floor(Math.random() * 5));
   
   randomBtn.addEventListener("click", randomaize);
   
   function randomaize() {
      currentIndex = Math.floor(Math.random() * reviews.length);
      updateUserDetails();
    }
   