({
    /*
     * This finction defined column header
     * and calls getAccounts helper method for column data
     * editable:'true' will make the column editable
     * */
	onInit : function(component, event, helper) {
        var allData = component.get("v.allData");        
        component.set("v.totalPages", Math.ceil(allData.length/component.get("v.pageSize")));
        component.set("v.currentPageNumber",1);
        helper.buildData(component, helper);
    },
    
    onNext : function(component, event, helper) {        
        var pageNumber = component.get("v.currentPageNumber");
        component.set("v.currentPageNumber", pageNumber+1);
        helper.buildData(component, helper);
    },
    
    onPrev : function(component, event, helper) {        
        var pageNumber = component.get("v.currentPageNumber");
        component.set("v.currentPageNumber", pageNumber-1);
        helper.buildData(component, helper);
    },
    
    processMe : function(component, event, helper) {
        component.set("v.currentPageNumber", parseInt(event.target.name));
        helper.buildData(component, helper);
    },
    
    onFirst : function(component, event, helper) {        
        component.set("v.currentPageNumber", 1);
        helper.buildData(component, helper);
    },
    
    onLast : function(component, event, helper) {        
        component.set("v.currentPageNumber", component.get("v.totalPages"));
        helper.buildData(component, helper);
    },
})