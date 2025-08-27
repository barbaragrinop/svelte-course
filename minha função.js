minha função 
let $checkbox = e.container.find(".checkbox-tooltip"); 
let $johasnd = e.container.find("input[name='johasnd']");

$checkbox.kendoTooltip(
    { content: "If 'Pick list values (text controls only)' contains any value, this checkbox will be MANDATORY checked and cannot be unchecked.", 
    position: "top" })
    .data("kendoTooltip")
    
    if($johasnd.val().length > 0){
        $checkbox.prop("checked", true);
        $checkbox.prop("disabled", true);
    }
    