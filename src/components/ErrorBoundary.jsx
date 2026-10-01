import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error('AMRA Construction application error:', error);
    console.error('Component stack:', errorInfo?.componentStack);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <main
        style={{
          minHeight: '100vh',
          display: 'grid',
          placeItems: 'center',
          padding: '2rem',
          background: '#10151b',
          color: '#f4f1ea',
          textAlign: 'center',
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        <div style={{ maxWidth: '560px' }}>
          <p
            style={{
              margin: '0 0 0.75rem',
              color: '#c9a96e',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
            }}
          >
            AMRA Construction
          </p>

          <h1
            style={{
              margin: '0 0 1rem',
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 500,
              lineHeight: 1.1,
            }}
          >
            Something went wrong.
          </h1>

          <p
            style={{
              margin: '0 auto 1.75rem',
              color: '#a9afb7',
              lineHeight: 1.6,
            }}
          >
            An unexpected error prevented this page from loading.
            Please try again.
          </p>

          <button
            type="button"
            onClick={this.handleReload}
            style={{
              border: '1px solid #c9a96e',
              background: '#c9a96e',
              color: '#10151b',
              padding: '0.8rem 1.4rem',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              borderRadius: '2px',
            }}
          >
            Reload Page
          </button>

          {import.meta.env.DEV && this.state.error && (
            <pre
              style={{
                marginTop: '2rem',
                padding: '1rem',
                overflow: 'auto',
                textAlign: 'left',
                background: '#171d24',
                color: '#ffb4b4',
                fontSize: '0.75rem',
                whiteSpace: 'pre-wrap',
              }}
            >
              {this.state.error.stack || String(this.state.error)}
            </pre>
          )}
        </div>
      </main>
    );
  }
}