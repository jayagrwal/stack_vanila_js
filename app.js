var my_stack = new MyStack()

function showInput() {
	var current_stack = my_stack.getStack()
	var stack_level = ""
	current_stack.forEach(function(value){
		stack_level = stack_level + "<div>"+value+"</div>"
	})
	document.getElementById("scrn").innerHTML = stack_level
};

function pushItemInStack() {
	my_stack.push(document.getElementById("stinp").value);
	showInput()
};

document.getElementById("pushbtn").addEventListener ("click", pushItemInStack,false);

function popItemFromStack() {
	my_stack.pop();
	showInput()
};

document.getElementById("popbtn").addEventListener ("click", popItemFromStack,false);