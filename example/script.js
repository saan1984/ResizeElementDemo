(function() {

    this.ResizableNode = function() {
        var startX, startY, startWidth, startHeight;
        if (arguments[0] && typeof arguments[0] === "object") {
            this.options = arguments[0]
        }
        console.log("this.options",this.options)
        var resizer = document.createElement('div'),
               node = document.querySelector(this.options.content);
        node.className = node.className + ' resizable';
        node.style.border = '1px dotted #f0f0f0';
        node.style.position = 'relative';
        node.style.overflow = 'hiddenz3`';
        //background: blue;
        resizer.className = 'resizer';
        resizer.style.cursor = 'se-resize';
        resizer.style.bottom = '0';
        resizer.style.right = '0';
        resizer.style.position = 'absolute';
        resizer.style.width = '10px';
        resizer.style.height = '10px';
        node.appendChild(resizer);
        var doDrag = function(e) {
           node.style.width = (startWidth + e.clientX - startX) + 'px';
            node.style.height = (startHeight + e.clientY - startY) + 'px';
        }
       var stopDrag = function(e) {
            document.documentElement.removeEventListener('mousemove', doDrag, false);
            document.documentElement.removeEventListener('mouseup', stopDrag, false);
        }
        var startDrag = function(e) {
            startX = e.clientX;
            startY = e.clientY;
            startWidth = parseInt(document.defaultView.getComputedStyle(node).width, 10);
            startHeight = parseInt(document.defaultView.getComputedStyle(node).height, 10);
            document.documentElement.addEventListener('mousemove', doDrag, false);
            document.documentElement.addEventListener('mouseup', stopDrag, false);
        }

        resizer.addEventListener('mousedown', startDrag, false);
    }
}());