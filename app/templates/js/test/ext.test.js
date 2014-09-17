define([
    'scalejs!core', 'scalejs!application'
], function(
    core
) {
    var <%=ext_name%> = core.<%=ext_name%>;

    // For deeper testing, log to console
    console.log('core.<%=ext_name%>: ', <%=ext_name%>);

    return describe('core.<%=ext_name%>', function() {

        it('is defined', function() {
            return expect(<%=ext_name%>).toBeDefined();
        });

    });
});

