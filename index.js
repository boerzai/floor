window.onload=function(){
	var floor=$(".floor");
	var arr=[];
     
     // for(var 1=0;i<floor.length;i++){
     // 	arr.push(floor[i].offsetTop);
     // }
     //  var heights=document.documentElement.clientHeight;

	for(var i=0;i<floor.length;i++){
		arr.push(floor[i].offsetTop);
	}

	var heights=document.documentElement.clientHeight;
	//滚轮滚动的距离+窗口可视区域高度>=当前楼层到页面顶部距离

  /*楼层跳转*/
  var flag=true;
  var lis=$("li",$(".jump")[0]);
      for(var i=0;i<lis.length;i++){
      	lis[i].index=i;
      	 lis[i].onclick=function(){
      	 	flag=false;
      	 	for(var j=0;j<lis.length;j++){
      	 		lis[j].style.background="#ccc"
      	 	}
      	 	lis[this.index].style.background="red"
      	 	// var obj=document.body.scrollTop?document.body:document.documentElement;
      	 	animate(document.body,{scrollTop:arr[this.index]},function(){flag=true});
      	 	animate(document.documentElement,{scrollTop:arr[this.index]},function(){flag=true});

      	 };
      };




var serflag=true;
//滚动事件
	window.onscroll=function(){
	//实时获取当前状态滚轮滚动的距离
	var serch=$(".serch")[0];
	var obj=document.body.scrollTop?document.body:document.documentElement;
	var scrolltop=obj.scrollTop;
	//判断滚轮滚动的距离+窗口可视区域高度>=当前楼层到页面顶部距离
	for(var i=0;i<floor.length;i++){
		if(scrolltop+heights>=arr[i]+100){
			//当前层下的图片进行加载  floor[i]
			var imgs=$("img",floor[i]);
			for(var j=0;j<imgs.length;j++){
				imgs[j].src=imgs[j].getAttribute("imgpath");
			};
		};
	};
	
    // 搜索框
     

    if(scrolltop>=arr[0]){
    	if(serflag){
    		serflag=false;
    		animate(serch,{top:0},100)
    	}
      
    }else {
    	if(!serflag){
    		serflag=true;
    		animate(serch,{top:-40},100)
    	}
    	
    }



/*按钮变色*/
      if(!flag){
      	return;
      }
      for(var i=0;i<floor.length;i++){
		if(scrolltop+heights>=arr[i]+100){
			for(var j=0;j<lis.length;j++){
				lis[j].style.background="#ccc"
			};
			lis[i].style.background="red";
		};
	};
};
       

}