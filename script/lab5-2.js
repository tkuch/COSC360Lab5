window.addEventListener('load', function(){
    var body = document.querySelector('body');
        if (body) {
            traverseElements(body.childNodes);
        }

    function traverseElements(nodes){  
        if (nodes.length > 0){
            for (var i = 0; i <nodes.length; i++){
                if (nodes[i].nodeType !== 3 && !nodes[i].classList.contains("hoverNode")){
                    var hoverNode = document.createElement('span');
                    hoverNode.className = "hoverNode";
                    hoverNode.innerHTML = nodes[i].tagName;
                    nodes[i].append(hoverNode);
                    var message = "ID: " + (nodes[i].id === "" ? "N/A" : nodes[i].id) + "\r\ninnerHTML: " + nodes[i].innerHTML;
                    hoverNode.addEventListener('click', function (){
                        alert(message);
                    });
                    traverseElements(nodes[i].childNodes);
                }
            }
        }
    }
});