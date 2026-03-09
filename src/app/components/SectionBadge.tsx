interface SectionBadgeProps {
  text: string;
}

export function SectionBadge({ text }: SectionBadgeProps) {
  return (
    <div
      className="inline-flex items-center justify-center"
      style={{
        backgroundColor: '#FDE8F0',
        color: '#E0186C',
        fontSize: '13px',
        fontWeight: 500,
        letterSpacing: '0.05em',
        paddingLeft: '18px',
        paddingRight: '18px',
        paddingTop: '7px',
        paddingBottom: '7px',
        borderRadius: '999px',
        textAlign: 'center',
        whiteSpace: 'nowrap',
      }}
    >
      {text}
    </div>
  );
}