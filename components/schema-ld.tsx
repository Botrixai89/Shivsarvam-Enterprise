interface SchemaLdProps {
  data: Record<string, unknown>
}

export function SchemaLd({ data }: SchemaLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
