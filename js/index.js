const PAGE = {
  data:{
    questions: [
      {
        id: 1,
        title: "4%2 的值为",
        options: [0,1,2,4],
        correct: 0,
      },
      {
        id: 2,
        title: "\"0\" == false 的值为",
        options: ["true","false"],
        correct: 0,
      },
      {
        id: 3,
        title: "不设置cookie设置过期时间，cookie的默认时间长度为",
        options: ["立刻过期","永不过期","cookie 无法设置","在浏览器会话结束时过期"],
        correct: 3,
      },
      {
        id: 4,
        title: "+new Array(042) 的值为",
        options: ["43","NaN","42","Error"],
        correct: 1,
      },
      {
        id: 5,
        title: "数组的方法中，哪些方法不能改变自身数组？",
        options: ["pop","splice","sort","concat"],
        correct: 3,
      },
      {
        id: 6,
        title: "Number(null); 的值为：",
        options: ["null",0,"undefined",1],
        correct: 1,
      }
    ],
    currentIndex: 1,
    correctNumber:0,
  },

  init:function(){
    this.bind();
    this.render();
  },

  bind:function(){
    $('.list').on('click','.item',this.answer);
    $('.next').on('click',this.next)
  },

  render:function(){
    let questions = PAGE.data.questions;
    let currentIndex = PAGE.data.currentIndex-1;
    let theTitle = questions[currentIndex];
    let title = theTitle.title;
    let options = theTitle.options;
    let id = theTitle.id;
    let total = questions.length;


    let showTitle = `
      <span class="title-number">第${id}题:</span>
      <span class="title-name">${title}</span>
    `
    $('.title').html(showTitle)


    let showOptions = options.map((data,index)=>{
       return `
        <li class="item hover" data-index="${index}">${data}</li>
       `
    })
    $('.list').html(showOptions);
    $('#total').html(total)
  },

  next:function(){
    let currentIndex = PAGE.data.currentIndex;
    PAGE.data.currentIndex = currentIndex+1;
    let number = PAGE.data.questions.length;
    if(currentIndex >=number){
      alert('已经是最后一题了')
      return;
    }
    PAGE.render();
  },

  answer:function(e){
    // let answerItem = e.target;
    // let index = answerItem.dataset.index;
    let index = $(this).data('index');
    let questions = PAGE.data.questions;
    let currentIndex = PAGE.data.currentIndex-1;
    if(questions[currentIndex].jue) return
    let theTitle = questions[currentIndex].correct;
    // let correct = theTitle.correct;
    $(".item").removeClass("hover");
    if(index==theTitle){
      this.style.background = "#00ff00";
      PAGE.data.correctNumber +=1
    }else{
      this.style.background = "#ff0000";
    }
    $('#correct').html(PAGE.data.correctNumber)
    questions[currentIndex].jue = true
  },
}

PAGE.init();