function calcTotal(){
    var total=0;
    var item=document.getElementsByTagName('input');
    for(var i=0;i<item.length;i++)
    {
        if(item[i].checked)
        {
            total=total+parseInt(item[i].value);
        }
    }
    document.getElementById('total').innerHTML="you have to pay" + total + "00.rs";

}