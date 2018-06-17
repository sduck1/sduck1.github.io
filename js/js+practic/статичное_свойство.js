 const artical = ()=> artical.count++;

 artical.count = 0;

artical.showCount = ()=> alert(this.count);







 function Article() {
     Article.count++;

     //...
 }
 Article.count = 0;

 Article.showCount = function() {
     alert( this.count ); // (1)
 };



 // использование
 new Article();
 new Article();
 Article.showCount(); // (2)