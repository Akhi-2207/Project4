let x=document.getElementsByClassName("myimg");
let y=document.getElementById("img01");
let z=document.getElementById("mymodal");
let c=document.getElementsByClassName("close")[0];

for(i=0;i<x.length;i++)
{
    x[i].onclick=function ()
    {
        z.style.display="block";
        y.src=this.src;
    }
}
c.onclick=function ()
{
    z.style.display="none";
}
z.onclick=function()
{
    z.style.display="none";
}