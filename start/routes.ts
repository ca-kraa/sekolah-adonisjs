/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import SiswasController from '#controllers/siswas_controller'
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')
router.get('/siswa', [SiswasController, 'showStudent'])
router.post('/create-siswa', [SiswasController, 'createStudent'])
router.get('/detail-siswa/:id', [SiswasController, 'detailStudent'])
router.put('/update-siswa/:id', [SiswasController, 'updateStudent'])
router.delete('/delete-siswa/:id', [SiswasController, 'deleteStudent'])
