//File Editor
(function(Handsontable){
    //Blank editor, because all the work is done by renderer
    var FileEditor = Handsontable.editors.BaseEditor.prototype.extend();
    FileEditor.prototype.init = function() {

    };

    FileEditor.prototype.prepare = function(){

    };

    FileEditor.prototype.open = function () {

    };

    FileEditor.prototype.setValue = function (value) {

    };

    FileEditor.prototype.getValue = function () {

    };

    FileEditor.prototype.beginEditing = function (initialValue){

    };
    FileEditor.prototype.finishEditing = function (restoreOriginalValue, ctrlDown, callback){

    };
    FileEditor.prototype.close = function () {

    };
    FileEditor.prototype.focus = function () {

    };

    Handsontable.editors.FileEditor = FileEditor;
    Handsontable.editors.registerEditor('file', FileEditor);
})(Handsontable);
//Select Editor
(function(Handsontable){
    //Blank editor, because all the work is done by renderer
    var SelectEditor = Handsontable.editors.BaseEditor.prototype.extend();

    SelectEditor.prototype.init = function() {

    };

    SelectEditor.prototype.prepare = function(){

    };

    SelectEditor.prototype.open = function () {

    };

    SelectEditor.prototype.setValue = function (value) {

    };

    SelectEditor.prototype.getValue = function () {

    };

    SelectEditor.prototype.beginEditing = function (initialValue){

    };
    SelectEditor.prototype.finishEditing = function (restoreOriginalValue, ctrlDown, callback){

    };
    SelectEditor.prototype.close = function () {

    };
    SelectEditor.prototype.focus = function () {

    };

    Handsontable.editors.SelectEditor = SelectEditor;
    Handsontable.editors.registerEditor('selectBox', SelectEditor);
})(Handsontable);