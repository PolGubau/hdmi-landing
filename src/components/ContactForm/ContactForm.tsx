// components/FormularioInteractivo.tsx
import { useEffect, useState } from 'react'


export default function ContactForm() {
  const [plan, setPlan] = useState('')
  const [quiereImagen, setQuiereImagen] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    setPlan(params.get('plan') || '')
    setQuiereImagen(params.get('imagen') === 'si')
  }, [])

  return (
    <form className="flex flex-col gap-4 border" id='contact'>
      <label>
        Plan:
        <select value={plan} onChange={e => setPlan(e.target.value)}>
          <option value="">Selecciona un plan</option>
          <option value="basic">Básico</option>
          <option value="pro">Premium</option>
          <option value="custom">Proyecto completo</option>
          <option value="other">Busco otra cosa (diseño, mentoría, logo...)</option>
        </select>
      </label>

      <label>
        ¿Quieres que diseñemos una imagen de marca?
        <input
          type="checkbox"
          checked={quiereImagen}
          onChange={e => setQuiereImagen(e.target.checked)}
        />
      </label>

      {quiereImagen && (
        <label>
          ¿Tienes alguna referencia?
          <input type="text" name="referencias" />
        </label>
      )}

      <button type="submit">Enviar</button>
    </form>
  )
}
