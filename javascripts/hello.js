$(function() {
  // DOM�\�z����
  
  // �R���g���[���̒�`
  var helloWorldController = {
    __name: 'HelloWorldController', // <- �J���}��Y�ꂸ��
    '#button click': function() {
      alert("����ɂ��͐��E�I");
    }
  };
  
  // �R���g���[��������
  h5.core.controller('body', helloWorldController);  
});