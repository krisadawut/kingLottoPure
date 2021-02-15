var table = $('#dtable').DataTable({
    ajax: 'http://localhost/api/users',
    deferRender: true,
    scrollY:        350,
    scrollCollapse: true,
    scroller:       true,
    columns: [
        { data: 'UserId' },
        { data: 'UserName' },
        { data: 'password' },
        { data: 'UserTypeId' },
        { data: 'creditAmount' },
        { data: 'parentid' },
        { data: null ,
          render: function(data) {
                  // return '<a class="btn btn-info btn-sm" href=#/' + data.UserName + '>' + 'Edit' + '</a>';
                  // return '<button onclick="alert('+data.UserId+')">click</button>';
                  return '<button class="button-del" onclick="_delete('+data.UserId+')">ลบ</button>';
                }
        }
    ],
});
//jquery-confirm
function _delete(id) {
  $.confirm({
      title: 'ลบรายการ !!',
      content: 'ต้องการจะลบรายการ UserId = '+id+' ใช่หรือไม่',
      boxWidth: '500px',
      useBootstrap: false,
      buttons: {
          confirm: {
            text: 'ลบ',
            btnClass: 'btn-red',
            keys: ['enter', 'shift'],
            action: function () {
              $.ajax({
                method:"POST",
                url: '/admin_user/DeleteUser',
                data: {"UserId": id},
                success:function(data){
                  table.ajax.reload();
                }
              })
            }
          },
          cancel: {
            text: 'ยกเลิก'
            // btnClass: 'btn-blue',
            // keys: ['enter', 'shift'],
            // action: function () {
            //   $.alert({
            //     title: 'Cancel',
            //     content: '',
            //     boxWidth: '500px',
            //     useBootstrap: false
            //   });
            // }
          }
          // cancel: function () {
          //   $.alert({
          //     title: 'Cancel',
          //     content: '',
          //     boxWidth: '500px',
          //     useBootstrap: false
          //   });
          // },
          // somethingElse: {
          //     text: 'Something else',
          //     btnClass: 'btn-blue',
          //     keys: ['enter', 'shift'],
          //     action: function(){
          //         $.alert('Something else?');
          //     }
          // }
          
      }
  });
}