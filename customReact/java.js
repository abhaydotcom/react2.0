
function customRender(root,element){
    const domElement=document.createElement(element.type);
    domElement.innerHTML=element.child;
    domElement.setAttribute('href',element.props.href)
    domElement.setAttribute('target',element.props.target)
    root.appendChild(domElement);
}

const element={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    child:'Click Here to Visit'

}

const root=document.querySelector('#root');

customRender(root,element);