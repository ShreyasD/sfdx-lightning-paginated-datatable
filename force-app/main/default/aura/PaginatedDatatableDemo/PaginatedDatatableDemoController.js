({
    onInit : function(component, event, helper) {
        component.set("v.accountColumns", [
        {label: 'Id', fieldName: 'Id', type: 'text'},
        {label: 'Account name', fieldName: 'Name', type: 'text'},
        {label: 'Phone', fieldName: 'Phone', type: 'text'}
        ]);
        helper.getAccounts(component, event, helper);
    }
})
