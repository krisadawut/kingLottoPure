$('#dtable').DataTable({
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
        { data: 'parentid' }
        // { data: null ,
        //   render: function(data) {
        //           // return '<a class="btn btn-info btn-sm" href=#/' + data.UserName + '>' + 'Edit' + '</a>';
        //           // return '<button onclick="alert('+data.UserId+')">click</button>';
        //           return '<button class="button-del" onclick="_delete('+data.UserId+')">ลบ</button>';
        //         }
        // }
    ],
});
$('#dtable').on('draw.dt', function(){
    $('#dtable').Tabledit({
      url: 'http://localhost/api/users',
      dataType:'json',
      columns: {
          identifier: [0, 'UserId'],
          editable: [[1, 'UserName'], [2, 'password'], [3, 'UserTypeId'], [4, 'creditAmount'], [5, 'parentid']]
      },
      buttons: {
        edit: {
            class: 'btn btn-sm btn-default',
            html: '<span class="glyphicon glyphicon-pencil"></span>',
            action: 'edit'
        },
        delete: {
            class: 'btn btn-sm btn-default',
            html: '<span class="glyphicon glyphicon-trash"></span>',
            action: 'delete'
        },
        save: {
            class: 'btn btn-sm btn-success',
            html: 'Save'
        },
        restore: {
            class: 'btn btn-sm btn-warning',
            html: 'Restore',
            action: 'restore'
        },
        confirm: {
            class: 'btn btn-sm btn-danger',
            html: 'Confirm'
        }
    }
    })

})
;

// //jquery-confirm
// function _delete(id) {
//   $.confirm({
//       title: 'ลบรายการ !!',
//       content: 'ต้องการจะลบรายการ UserId = '+id+' ใช่หรือไม่',
//       boxWidth: '500px',
//       useBootstrap: false,
//       buttons: {
//           confirm: {
//             text: 'ลบ',
//             btnClass: 'btn-red',
//             keys: ['enter', 'shift'],
//             action: function () {
//               $.ajax({
//                 method:"POST",
//                 url: '/admin_user/DeleteUser',
//                 data: {"UserId": id},
//                 success:function(data){
//                   table.ajax.reload();
//                 }
//               })
//             }
//           },
//           cancel: {
//             text: 'ยกเลิก'
    
//           }

          
//       }
//   });
// }