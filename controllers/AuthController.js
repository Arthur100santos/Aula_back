const User = require('../models/User')

const bcrypt = require('bcryptjs')

module.exports = class AuthController{
  static async login(request, response){
    return response.render('auth/login')
  }

  static async register(request, response){
    return response.render('auth/register')
  }

  static async registerPost(request, response){
    const {name, email, password, confirmpassword} = request.body

    if(password != confirmpassword){
      request.flash('message','As senhas não conferem, tente novamente.')
      return response.render('auth/register')
    }

    //validação de email - verificar se email já está cadastrado

    //criptografar a senha do usuário

    //criar o objeto usuário para cadastro no banco

    //TRY - inserir usuário no banco e trabalhar com sessão
  }
}