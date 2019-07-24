({
    onInit : function(component, event, helper) {
        var rowActions = [{
            'label': 'View Details',
            'iconName': 'utility:zoomin',
            'name': 'view_details'
        }];
        component.set("v.accountColumns", [
        {label: 'Id', fieldName: 'Id', type: 'text'},
        {label: 'Account name', fieldName: 'Name', type: 'text'},
        {label: 'Phone', fieldName: 'Phone', type: 'text'},
        { type: 'action', typeAttributes: { rowActions: rowActions } }
        ]);
        helper.getAccounts(component, event, helper);
    },

    handleRowAction: function (component, event, helper) {
        var action = event.getParam('action');
        var row = event.getParam('row');
        console.log("action: " + action + " row: " + row);

        switch (action.name) {
            case 'view_details':
                alert('Showing Details: ' + JSON.stringify(row));
                break;
        }
    },
})
