import type { HttpContext } from '@adonisjs/core/http'
import Siswa from '#models/siswa'

export default class SiswasController {
  public async showStudent({ response }: HttpContext) {
    const siswas = await Siswa.all()

    return response.status(200).json({ code: 200, status: 'success', data: siswas })
  }

  public async createStudent({ request, response }: HttpContext) {
    const input = request.only(['nama', 'kelas', 'jurusan'])
    try {
      const siswas = await Siswa.create(input)

      return response.status(200).json({ code: 200, status: 'success', data: siswas })
    } catch (err) {
      return response.status(500).json({ code: 500, status: 'error', message: err.message })
    }
  }

  public async detailStudent({ params, response }: HttpContext) {
    try {
      const siswas = await Siswa.findBy('id', params.id)
      return response.status(200).json({ code: 200, status: 'success', data: siswas })
    } catch (err) {
      return response.status(500).json({ code: 500, status: 'error', message: err.message })
    }
  }

  public async updateStudent({ params, request, response }: HttpContext) {
    const input = request.only(['nama', 'kelas', 'jurusan'])

    try {
      const siswas = await Siswa.findBy('id', params.id)
      siswas?.merge(input)

      await siswas?.save()

      return response.status(200).json({ code: 200, status: 'success', data: siswas })
    } catch (err) {
      return response.status(500).json({ code: 500, status: 'error', message: err.message })
    }
  }

  public async deleteStudent({ params, response }: HttpContext) {
    try {
      const siswas = await Siswa.findBy('id', params.id)
      await siswas?.delete()

      return response.status(200).json({ code: 200, status: 'success', data: siswas })
    } catch (err) {
      return response.status(500).json({ code: 500, status: 'error', message: err.message })
    }
  }
}
