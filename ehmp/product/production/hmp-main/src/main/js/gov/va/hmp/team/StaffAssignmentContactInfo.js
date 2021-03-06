Ext.define('gov.va.hmp.team.StaffAssignmentContactInfo', {
    extend:'Ext.data.Model',
    idProperty:'uid',
    fields:[
        {
            name:'uid',
            type:'string'
        },
        {
            name:'displayName',
            type:'string'
        },
        {
            name:'displayTitle',
            type:'string'
        },
        {
            name:'displayService',
            type:'string'
        },
        {
            name:'officePhone',
            type:'string'
        },
        {
            name:'commercialPhone',
            type:'string'
        },
        {
            name:'digitalPager',
            type:'string'
        },
        {
            name:'fax',
            type:'string'
        },
        {
            name:'voicePager',
            type:'string'
        },
        {
        	name:'positionName',
        	type:'string'
        }
    ]
});