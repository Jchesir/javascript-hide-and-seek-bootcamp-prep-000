function getFirstSelector(selector) {

  return document.querySelector(selector)
}

function nestedTarget() {
  
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
var rankedList = document.querySelectorAll('.ranked-list')
for (let i=0; i < rankedList.length; i++) {
  let children = rankedList[i].children
  for (let a=0; a < children.length; a++) {
  children[a].innerHTML = parseInt(children[a].innerHTML) + n 
  }
  
}

  
}


function deepestChild() {

var node = document.getElementById('grand-node') 
var nextnode = node.children[0]
while (nextnode) {
  node = nextnode
  nextnode = node.children[0]
}
return node
}