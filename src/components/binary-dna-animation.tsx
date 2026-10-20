const BINARY_SEQUENCE = "01011101";
const COLUMN_COUNT = 128;
const DNA_COLUMNS = Array.from({ length: COLUMN_COUNT }, (_, index) => ({
  id: `dna-${index}`,
  digit: BINARY_SEQUENCE[index % BINARY_SEQUENCE.length],
  oppositeDigit: BINARY_SEQUENCE[(index + 4) % BINARY_SEQUENCE.length],
  delay: `${(-index * 24) / COLUMN_COUNT}s`,
  oppositeDelay: `${(-index * 24) / COLUMN_COUNT - 6}s`
}));

export function BinaryDnaAnimation() {
  return (
    <div
      className="binary-dna pointer-events-none absolute inset-0 -z-10 overflow-hidden select-none"
      aria-hidden="true"
    >
      <div className="binary-dna-helix">
        {DNA_COLUMNS.map(({ id, digit, oppositeDigit, delay, oppositeDelay }) => (
          <div className="binary-dna-column" key={id}>
            <span className="binary-dna-rung" style={{ animationDelay: delay }} />
            <span className="binary-dna-digit" style={{ animationDelay: delay }}>
              {digit}
            </span>
            <span className="binary-dna-digit binary-dna-digit-mint" style={{ animationDelay: oppositeDelay }}>
              {oppositeDigit}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
