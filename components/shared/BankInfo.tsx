export function BankInfo() {
  return (
    <div className="w-full rounded-base border-2 border-border bg-white p-5 text-left shadow-[4px_4px_0_#222222]">
      <p className="mb-3 font-heading text-lg">🏦 Datos para transferencia</p>
      <div className="space-y-2 text-sm text-brand-black/90">
        <p>
          <strong>Titular:</strong> Angela Chaljub
        </p>
        <p>
          <strong>Cédula:</strong> 402-1402316-6
        </p>
        <div className="rounded-base border-2 border-border bg-brand-cream p-3">
          <p className="font-heading">Banco Popular</p>
          <p>Cuenta de ahorro: 799736970</p>
        </div>
        <div className="rounded-base border-2 border-border bg-brand-cream p-3">
          <p className="font-heading">APAP</p>
          <p>Cuenta de ahorro: 1000356922</p>
        </div>
      </div>
      <p className="mt-3 text-xs text-brand-black/70">
        Envía el comprobante por WhatsApp o email para confirmar tu pedido.
      </p>
    </div>
  )
}
