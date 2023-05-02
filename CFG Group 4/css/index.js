const content=document.getElementById('content')
const addBth=document.getElementById('addBth')
const deletedBth=document.getElementById('deletedBth')
const list=document.getElementById('list')

const listContent=[]

class renderFeature{
    render(){
        let htmlStr=''


        listContent.forEach(function (item) {
            htmlStr=htmlStr+`
        <div class="m-padded-tp-big m-padded-lr-responsive" id="item">
        <div><span>Test User:${item.content}</span></div>
        
        `
        })
        list.innerHTML=htmlStr
    }
    clear(){
        document.getElementById('content').value="";

    }
}

    const r1=new renderFeature()
addBth.addEventListener('click',function () {

    listContent.unshift({
            content:content.value,
           
        })
    r1.render()
    r1.clear()


})

deletedBth.addEventListener('click',function (){
    listContent.shift()
    r1.render()
})