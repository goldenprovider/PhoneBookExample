Ext.define('PhoneBook.view.ContactList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.contactList',

    config: {
        store: 'Contacts',
        emptyText: 'No Contacts!',

        itemTpl: '<div class="myContent">' +
                 '<div>Name: <b>{first_name} {last_name}</b></div>' +
                 '<div>Email: <b>{email}</b></div>' +
                 '<div>Phone: <b>{phone}</b> Cell: <b>{cellphone}</b></div>' +
                 '</div>' +
                 '<div class="myButton">' +
                 '<input type="button" value="Delete" style="color: red;"/>' +
                 '</div>'

    }
});
