import { supabase } from '../../utils/supabaseClient'

export default async function handler(req, res) {
  let { data, error } = await supabase.from('test_table').select('*')

  if (error) return res.status(401).json({ error: error.message })

  return res.status(200).json(data)
}