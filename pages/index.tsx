import { useState } from 'react';

export default function Home() {
  const [outcomeCategorical, setOutcomeCategorical] = useState(false);
  const [pairedGroups, setPairedGroups] = useState(false);
  const [numGroups, setNumGroups] = useState<number>(2);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ test: string; rationale: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleRecommend = async () => {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch('/api/recommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          outcomeCategorical,
          pairedGroups,
          numGroups,
        }),
      });
      if (!res.ok) {
        throw new Error(`Request failed: ${res.statusText}`);
      }
      const data = await res.json();
      setResult(data);
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', maxWidth: 600, margin: '0 auto' }}>
      <h1>Statistical Test Recommender</h1>
      <p>Answer a few questions and we'll suggest an appropriate statistical test for your data.</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleRecommend();
        }}
        style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
      >
        <label>
          <input
            type="checkbox"
            checked={outcomeCategorical}
            onChange={(e) => setOutcomeCategorical(e.target.checked)}
          />
          {' '}Outcome is categorical?
        </label>
        <label>
          <input
            type="checkbox"
            checked={pairedGroups}
            onChange={(e) => setPairedGroups(e.target.checked)}
          />
          {' '}Paired groups?
        </label>
        <label>
          Number of groups:{' '}
          <input
            type="number"
            min={1}
            value={numGroups}
            onChange={(e) => setNumGroups(parseInt(e.target.value, 10) || 1)}
            style={{ width: '4rem' }}
          />
        </label>
        <button type="submit" disabled={loading} style={{ padding: '0.5rem 1rem' }}>
          {loading ? 'Recommending...' : 'Recommend Test'}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {result && (
        <div style={{ marginTop: '1rem', border: '1px solid #ccc', padding: '1rem' }}>
          <h2>Recommended Test: {result.test}</h2>
          <p>{result.rationale}</p>
        </div>
      )}
    </div>
  );
}
