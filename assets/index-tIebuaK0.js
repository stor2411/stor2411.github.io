// 간단한 GreenShop React 앱
import React from 'react';
import ReactDOM from 'react-dom/client';

// 기본 App 컴포넌트
function App() {
  return React.createElement('div', { 
    style: { 
      fontFamily: 'Arial, sans-serif',
      minHeight: '100vh',
      backgroundColor: '#f0fdf4',
      color: '#1a1a1a'
    }
  }, [
    // 네비게이션
    React.createElement('nav', {
      key: 'nav',
      style: {
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f7f9fb',
        borderBottom: '1px solid #e5e7eb',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50
      }
    }, [
      React.createElement('a', {
        key: 'logo',
        href: '#/',
        style: {
          fontSize: '1.8rem',
          fontWeight: '700',
          color: '#1d4e33',
          textDecoration: 'none',
          fontFamily: 'Dancing Script, cursive'
        }
      }, 'GreenShop'),
      React.createElement('div', {
        key: 'nav-links',
        style: { display: 'flex', gap: '1rem' }
      }, [
        React.createElement('a', {
          key: 'home',
          href: '#/',
          style: { color: '#374151', textDecoration: 'none' }
        }, '홈'),
        React.createElement('a', {
          key: 'products',
          href: '#/product-detail',
          style: { color: '#374151', textDecoration: 'none' }
        }, '제품'),
        React.createElement('a', {
          key: 'cart',
          href: '#/cart',
          style: { color: '#374151', textDecoration: 'none' }
        }, '장바구니'),
        React.createElement('a', {
          key: 'about',
          href: '#/about',
          style: { color: '#374151', textDecoration: 'none' }
        }, '소개')
      ])
    ]),
    
    // 메인 콘텐츠
    React.createElement('main', {
      key: 'main',
      style: {
        paddingTop: '5rem',
        padding: '5rem 2rem 2rem 2rem',
        textAlign: 'center'
      }
    }, [
      React.createElement('h1', {
        key: 'title',
        style: {
          fontSize: '3rem',
          fontWeight: '700',
          color: '#1d4e33',
          marginBottom: '1rem'
        }
      }, '🌱 GreenShop에 오신 것을 환영합니다!'),
      
      React.createElement('p', {
        key: 'subtitle',
        style: {
          fontSize: '1.25rem',
          color: '#374151',
          marginBottom: '2rem',
          maxWidth: '600px',
          margin: '0 auto 2rem auto',
          lineHeight: '1.6'
        }
      }, '친환경 제품과 지속가능한 라이프스타일을 위한 온라인 쇼핑몰입니다.'),
      
      React.createElement('div', {
        key: 'features',
        style: {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '3rem auto'
        }
      }, [
        React.createElement('div', {
          key: 'feature1',
          style: {
            backgroundColor: '#ffffff',
            padding: '2rem',
            borderRadius: '1rem',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
            border: '1px solid #e5e7eb'
          }
        }, [
          React.createElement('h3', {
            key: 'f1-title',
            style: { color: '#1d4e33', marginBottom: '1rem' }
          }, '🌿 친환경 제품'),
          React.createElement('p', {
            key: 'f1-desc',
            style: { color: '#374151' }
          }, '지구를 생각하는 친환경 제품들을 엄선했습니다.')
        ]),
        
        React.createElement('div', {
          key: 'feature2',
          style: {
            backgroundColor: '#ffffff',
            padding: '2rem',
            borderRadius: '1rem',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
            border: '1px solid #e5e7eb'
          }
        }, [
          React.createElement('h3', {
            key: 'f2-title',
            style: { color: '#1d4e33', marginBottom: '1rem' }
          }, '♻️ 지속가능성'),
          React.createElement('p', {
            key: 'f2-desc',
            style: { color: '#374151' }
          }, '환경을 보호하는 지속가능한 소비를 지향합니다.')
        ]),
        
        React.createElement('div', {
          key: 'feature3',
          style: {
            backgroundColor: '#ffffff',
            padding: '2rem',
            borderRadius: '1rem',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
            border: '1px solid #e5e7eb'
          }
        }, [
          React.createElement('h3', {
            key: 'f3-title',
            style: { color: '#1d4e33', marginBottom: '1rem' }
          }, '🚀 빠른 배송'),
          React.createElement('p', {
            key: 'f3-desc',
            style: { color: '#374151' }
          }, '친환경 포장재로 안전하고 빠르게 배송합니다.')
        ])
      ]),
      
      React.createElement('button', {
        key: 'cta',
        style: {
          backgroundColor: '#2d7a4f',
          color: '#ffffff',
          padding: '0.75rem 1.5rem',
          borderRadius: '0.5rem',
          fontWeight: '600',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1rem',
          marginTop: '2rem'
        },
        onClick: () => window.location.hash = '#/product-detail'
      }, '제품 둘러보기')
    ]),
    
    // 푸터
    React.createElement('footer', {
      key: 'footer',
      style: {
        backgroundColor: '#1f2937',
        color: '#ffffff',
        padding: '2rem',
        textAlign: 'center',
        marginTop: '4rem'
      }
    }, [
      React.createElement('p', {
        key: 'footer-text',
        style: { fontSize: '0.875rem' }
      }, '© 2025 GreenShop. 지구를 생각하는 쇼핑몰.')
    ])
  ]);
}

// HashRouter 시뮬레이션
function Router() {
  const [currentHash, setCurrentHash] = React.useState(window.location.hash || '#/');
  
  React.useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#/');
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  
  // 라우팅 로직
  switch (currentHash) {
    case '#/':
    case '#/home':
      return React.createElement(App);
    case '#/product-detail':
      return React.createElement('div', {
        style: { padding: '5rem 2rem', textAlign: 'center' }
      }, React.createElement('h1', { style: { color: '#1d4e33' } }, '🛍️ 제품 상세 페이지'));
    case '#/cart':
      return React.createElement('div', {
        style: { padding: '5rem 2rem', textAlign: 'center' }
      }, React.createElement('h1', { style: { color: '#1d4e33' } }, '🛒 장바구니'));
    case '#/about':
      return React.createElement('div', {
        style: { padding: '5rem 2rem', textAlign: 'center' }
      }, React.createElement('h1', { style: { color: '#1d4e33' } }, 'ℹ️ 회사 소개'));
    default:
      return React.createElement(App);
  }
}

// 앱 시작
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(Router));