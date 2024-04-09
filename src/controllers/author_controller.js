import {getConnection} from '../database/database'
import logger from '../helpers/logger'


const getAuthors= async (req, res) =>{
    try {
        const connection = await getConnection()
        const result = await connection.query('Select * from tb_autor')
        console.log(result[0])
        res.json(result[0])
        logger.info('HTTP request methods - GET')
        logger.info('200 OK - Complete Data Authors!!')
    } catch (error) {
        res.status(500)
        res.send(error.message)
        logger.warn('502 - Bad Gateway')
    } 
}

const addAuthor = async (req, res) =>{
    try {
        const { nom_autor, ape_autor, hijos_autor}=req.body
        if(nom_autor===undefined || ape_autor===undefined || hijos_autor===undefined){
            res.status(400).json({message: "Bad Request"})
        }
        const author ={
            nom_autor, ape_autor, hijos_autor
        }
        const connection = await getConnection()
        const result = await connection.query("INSERT INTO tb_autor SET ?", author)
        res.json({message: "Author add!!"})
        logger.info('HTTP request methods - POST')
        logger.info('200 OK - Author add!!')
    } catch (error) {
        res.status(500)
        res.send(error.message)
        logger.warn('502 - Bad Gateway')
    } 
}

const getAuthor = async (req, res) =>{
    try {
        const {id} = req.params;
        const connection = await getConnection()
        const result = await connection.query('Select nom_autor, ape_autor, hijos_autor from tb_autor where cod_autor=?',id)
        console.log(result[0])
        res.json(result[0])
        logger.info('HTTP request methods - GET')
        logger.info('200 OK - Get Single Data Author!!')
        logger.info('Data of id: ' + id)
    } catch (error) {
        res.status(500)
        res.send(error.message)
        logger.warn('502 - Bad Gateway')
    } 
}

const deleteAuthor = async (req, res) =>{
    try {
        const {id} = req.params;
        const connection = await getConnection()
        const result = await connection.query('delete from tb_autor where cod_autor=?',id)
        console.log(result[0])
        res.json(result[0])
        logger.info('HTTP request methods - DELETE')
        logger.info('200 OK - Author removed!!')
    } catch (error) {
        res.status(500)
        res.send(error.message)
        logger.warn('502 - Bad Gateway')
    } 
}

const updateAuthor = async (req, res) =>{
    try {
        const {id} = req.params;
        const { nom_autor, ape_autor, hijos_autor}=req.body
        if(id===undefined, nom_autor===undefined || ape_autor===undefined || hijos_autor===undefined){
            res.status(400).json({message: "Bad Request"})
        }
        const author ={ nom_autor, ape_autor, hijos_autor}
        const connection = await getConnection()
        const result = await connection.query('update tb_autor set ? where cod_autor=?',[author,id])
        console.log(result[0])
        res.json(result[0])
        logger.info('HTTP request methods - PUT')
        logger.info('200 OK - Author updated!!')
    } catch (error) {
        res.status(500)
        res.send(error.message)
        logger.warn('502 - Bad Gateway')
    } 
}

export const methods = {
    getAuthors,
    addAuthor,
    getAuthor,
    deleteAuthor,
    updateAuthor
}