// SEE: https://code-boxx.com/drag-drop-sortable-list-javascript/
// DOC: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/draggable
// DOC: https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations

function slist(target) {
  // (A) SET CSS + GET ALL LIST ITEMS
  target.classList.add("slist");
  let items = target.getElementsByTagName("li"),
    current = null;

  // (B) MAKE ITEMS DRAGGABLE + SORTABLE
  for (let i of items) {
    // (B1) ATTACH DRAGGABLE
    i.draggable = true;

    // (B2) DRAG START - YELLOW HIGHLIGHT DROPZONES
    i.ondragstart = (e) => {
      current = i;
      for (let it of items) {
        if (it !== current) {
          it.classList.add("hint");
        }
      }
    };

    // (B3) DRAG ENTER - RED HIGHLIGHT DROPZONE
    i.ondragenter = (e) => {
      e.preventDefault();
      if (i !== current) {
        let currentpos = 0,
          droppedpos = 0;
        for (let it = 0; it < items.length; it++) {
          if (current === items[it]) {
            currentpos = it;
          }
          if (i === items[it]) {
            droppedpos = it;
          }
        }
        if (currentpos < droppedpos) {
          i.parentNode.insertBefore(current, i.nextSibling);
        } else {
          i.parentNode.insertBefore(current, i);
        }
      }
    };

    // (B4) DRAG LEAVE - REMOVE RED HIGHLIGHT
    i.ondragleave = () => i.classList.remove("active");

    // (B5) DRAG END - REMOVE ALL HIGHLIGHTS
    i.ondragend = () => {
      for (let it of items) {
        it.classList.remove("hint");
        it.classList.remove("active");
      }
    };

    // (B6) DRAG OVER - PREVENT THE DEFAULT "DROP", SO WE CAN DO OUR OWN
    i.ondragover = (e) => e.preventDefault();

    // (B7) ON DROP - DO SOMETHING
    i.ondrop = (e) => {
      e.preventDefault();
      // if (i !== current) {
      //   let currentpos = 0,
      //     droppedpos = 0;
      //   for (let it = 0; it < items.length; it++) {
      //     if (current === items[it]) {
      //       currentpos = it;
      //     }
      //     if (i === items[it]) {
      //       droppedpos = it;
      //     }
      //   }
      //   if (currentpos < droppedpos) {
      //     i.parentNode.insertBefore(current, i.nextSibling);
      //   } else {
      //     i.parentNode.insertBefore(current, i);
      //   }
      // }
    };
  }
}

slist(document.getElementById("sortlist"));
