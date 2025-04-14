import { useState, useEffect } from 'react';
import './ResearchProjectPage.css';

export default function ResearchProjectPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animating, setAnimating] = useState(false);
  
  const images = [
    "./CvsE100.png",
    "./CvsE500.png",
    "./CvsE50.png",
    "./CvsE250.png",
    "./output.png",
    "./output1.png",
    "./output7.png",
    "./output14.png",
    "./output15.png",
  ];
  
  const nextSlide = () => {
    if (animating) return;
    
    setAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };
  
  const prevSlide = () => {
    if (animating) return;
    
    setAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimating(false);
    }, 500); // Match this with your CSS transition duration
    
    return () => clearTimeout(timer);
  }, [currentSlide]);
  
  return (
    <div className="research-container">
      {/* Header Section */}
      <div className="header">
        <h1 className="title">
          VLSI Partitioning using Classical ML Techniques
        </h1>
        
        <div className="authors">
          <div>
            <span>Sohom Sarkar</span>
            <sup>1</sup>
          </div>
          <div>
            <span>Sambhav Jha</span>
            <sup>1</sup>
          </div>
          <div>
            <span>Tula Mrudhul</span>
            <sup>1</sup>
          </div>
          <div>
            <span>Aditya Jha</span>
            <sup>1</sup>
          </div>
          <div>
            <span>Rudra Kokhani</span>
            <sup>1</sup>
          </div>
        </div>
        
        <div className="affiliations">
          <div>
            <sup>1</sup> IIT Jodhpur
          </div>
        </div>
        
        <div className="links">
          <a href="mailto:b23ee1099@iitj.ac.in" className="link">
            <span>b23ee1099</span>
          </a>
          <a href="mailto:b23ee1092@iitj.ac.in" className="link">
            <span>b23ee1092</span>
          </a>
          <a href="mailto:b23ee1076@iitj.ac.in" className="link">
            <span>b23ee1076</span>
          </a>
          <a href="mailto:b23ee1082@iitj.ac.in" className="link">
            <span>b23ee1082</span>
          </a>
          <a href="mailto:b23ee1036@iitj.ac.in" className="link">
            <span>b23ee1036</span>
          </a>
        </div>
      </div>
      
      {/* Carousel Section - Images Only with Animation */}
      <div className="carousel-section">
        <button 
          onClick={prevSlide}
          className="nav-button"
          disabled={animating}
        >
          ←
        </button>
        
        <div className="carousel-container">
          <div 
            className={`carousel-slide ${animating ? 'animating' : ''}`}
            style={{
              transform: `translateX(-${currentSlide * 100}%)`
            }}
          >
            {images.map((image, index) => (
              <div key={index} className="carousel-item">
                <img 
                  src={image} 
                  alt={`Slide ${index + 1}`}
                  className="carousel-image"
                />
              </div>
            ))}
          </div>
        </div>
        
        <button 
          onClick={nextSlide}
          className="nav-button"
          disabled={animating}
        >
          →
        </button>
      </div>
      
      {/* Add these CSS styles to your ResearchProjectPage.css */}
      <style jsx>{`
        .carousel-section {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          margin: 2rem 0;
        }
        
        .carousel-container {
          width: 80%;
          height: 400px;
          overflow: hidden;
          position: relative;
        }
        
        .carousel-slide {
          display: flex;
          width: 100%;
          height: 100%;
          transition: transform 0.5s ease-in-out;
        }
        
        .carousel-slide.animating {
          transition: transform 0.5s ease-in-out;
        }
        
        .carousel-item {
          min-width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .carousel-image {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
        
        .nav-button {
          background: #2563eb;
          color: white;
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          font-size: 18px;
          cursor: pointer;
          margin: 0 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .nav-button:disabled {
          background: #93c5fd;
          cursor: not-allowed;
        }
      `}</style>
      
      {/* Abstract Section */}
      <div className="section">
        <h2 className="section-heading">Abstract</h2>
        <p>
        This project explores the application of classical machine learning (ML) techniques to the par-
        titioning of VLSI (Very Large Scale Integration) circuit netlists. We represent the VLSI design as
        a graph and aim to divide this graph into balanced and efficient subgraphs, minimizing the number
        of interconnections (cut size), total wire length, and critical path delay. Our approach evaluates
        multiple models, including unsupervised clustering techniques (KMeans, Agglomerative Clustering,
        Spectral Clustering) and supervised classification (SVM, Logistic Regression) applied to synthetic
        circuit graphs. The results reveal the strengths and weaknesses of each method, guiding toward more
        informed hybrid and deep-learning-based approaches in future work.
        <br/>
        <br/>
        <b>Keywords:</b> VLSI Partitioning, Graph-based ML, Spectral Clustering, KMeans, SVM, Optimization, Netlist
        </p>
      </div>

      <div className="section">
        <h2 className="section-heading">VLSI Partitioning</h2>
        <p>
        VLSI design is the cornerstone of modern electronic systems, enabling the integration of millions of
        transistors onto a single chip. As circuits become increasingly complex, optimizing their physical layout
        and internal structure becomes critical for performance, power efficiency, and scalability.
        <br/>
        <br/>
        Partitioning a netlist—which represents the connections between logic elements—is one of the funda-
        mental tasks in VLSI Computer-Aided Design (CAD). Partitioning aims to divide the netlist into multiple
        submodules such that the design becomes more manageable, modular, and scalable, while minimizing
        interconnection costs such as power, communication delay, and wire congestion.
        <br/>
        <br/>
        Traditional partitioning methods rely on heuristic and optimization-based algorithms. However,
        with the availability of annotated circuit datasets and advances in graph-based learning, we explore how
        classical machine learning methods can assist or even outperform heuristics in partitioning tasks.
        <br/>
        </p>
      </div>

      <div className="section">
        <h2 className="section-heading">Data Modelling</h2>
        <p>
        To simulate the behavior of a VLSI netlist, we designed a graph generation module that generates
        synthetic directed graphs adhering to electrical constraints observed in real-world circuits.
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img 
            src="./output.png" 
            alt="Methodology diagram" 
            style={{ 
              border: '1px solid #d1d5db', 
              padding: '8px', 
              width: '500px', // or any size you want like '80%', '300px'
              height: 'auto' 
            }}
          />
        </div>
        <br/>
        Traditional partitioning methods rely on heuristic and optimization-based algorithms. However,
        with the availability of annotated circuit datasets and advances in graph-based learning, we explore how
        classical machine learning methods can assist or even outperform heuristics in partitioning tasks.
        <br/>
        </p>
      </div>
      
      {/* Results Section */}
      <div className="section">
        <h2 className="section-heading">Approaches Tried</h2>
        <div className="results-grid">
          <div className="result-card">
            <h3 className="result-title">K Means Clustering</h3>
            <p className="result-text">Partitions nodes into k groups using average edge distance as a 1D feature, offering fast and interpretable clustering.</p>
          </div>
          <div className="result-card">
            <h3 className="result-title">Agglomerative Clustering</h3>
            <p className="result-text">Hierarchically merges nodes based on edge distance similarity, capturing nested cluster structures through dendrograms.</p>
          </div>
          <div className="result-card">
            <h3 className="result-title">Support Vector Machine (SVM)</h3>
            <p className="result-text">Classifies nodes by separating them with optimal hyperplanes in higher-dimensional space using linear and RBF kernels.</p>
          </div>
          <div className="result-card">
            <h3 className="result-title">Logistic Regression</h3>
            <p className="result-text">A simple, interpretable linear classifier using node-level features like degree and centrality to predict class labels.</p>
          </div>
          <div className="result-card">
            <h3 className="result-title">Spectral Clustering</h3>
            <p className="result-text">Uses graph Laplacian eigenvectors to reveal non-linear cluster structures, followed by KMeans in the transformed space.</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-heading">Observations</h2>
        <p>
        After the analysis we observed that agglomerative clustering and spectral clustering best perform with respect to other models. Agglomerative has higher variance and highly dependant on graphs, Spectral is more stable, and depending on the parameter number of cuts or critical length we can tune the model to get the best results.
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img 
            src="./best.png" 
            alt="Methodology diagram" 
            style={{ 
              border: '0px solid #d1d5db', 
              padding: '24px', 
              width: '500px', // or any size you want like '80%', '300px'
              height: 'auto' 
            }}
          />
        </div>
        </p>
      </div>

      {/* Spotlight Video Section */}
      <div className="section">
        <h2 className="section-heading">Spotlight Video</h2>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
          {/* YouTube video embed placeholder */}
          <div style={{ 
            width: '560px', 
            height: '315px',
            backgroundColor: '#f3f4f6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #d1d5db',
            borderRadius: '4px'
          }}>
            <p style={{ color: '#6b7280', fontStyle: 'italic' }}>YouTube video will be embedded here</p>
            {/* When you have the actual YouTube video link, replace the div above with: */}
            {/* <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
              title="VLSI Partitioning using Classical ML Techniques" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe> */}
          </div>
        </div>
      </div>

      {/* Report Section */}
      <div className="section">
        <h2 className="section-heading">Report</h2>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '1.5rem 0' }}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            maxWidth: '600px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', margin: '1rem 0' }}>
              <div style={{ 
                width: '120px', 
                height: '150px', 
                border: '1px solid #d1d5db', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                backgroundColor: '#f9fafb',
              }}>
                <div style={{ 
                  width: '80%', 
                  height: '80%', 
                  backgroundImage: 'linear-gradient(to bottom, #e5e7eb 0%, #e5e7eb 20%, transparent 20%, transparent 25%, #e5e7eb 25%, #e5e7eb 45%, transparent 45%, transparent 50%, #e5e7eb 50%, #e5e7eb 70%, transparent 70%, transparent 75%, #e5e7eb 75%, #e5e7eb 95%, transparent 95%)',
                }}></div>
              </div>
              <div>
                <h3 style={{ margin: '0 0 8px 0' }}>VLSI Partitioning using Classical ML Techniques</h3>
                <p style={{ margin: '0 0 4px 0' }}>Sohom Sarkar, Sambhav Jha, Tula Mrudhul, Aditya Jha, Rudra Kokhani</p>
                <div style={{ display: 'flex', gap: '10px', margin: '10px 0 0 0' }}>
                  <a href="#" style={{ 
                    padding: '6px 12px', 
                    backgroundColor: '#2563eb', 
                    color: 'white', 
                    textDecoration: 'none', 
                    borderRadius: '4px', 
                    fontSize: '14px' 
                  }}>
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="section">
        <h2 className="section-heading">Team</h2>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          flexWrap: 'wrap', 
          gap: '20px', 
          margin: '2rem 0' 
        }}>

        {/* Team Member 1 */}
        <div style={{ 
          width: '200px', 
          border: '1px solid #e5e7eb', 
          borderRadius: '8px', 
          padding: '1.5rem', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          backgroundColor: 'white'
        }}>
          <div style={{ 
            width: '120px', 
            height: '120px', 
            marginBottom: '1rem', 
            overflow: 'hidden', 
            borderRadius: '4px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}>
            <img 
              src="./sohom.jpg" // <-- Replace this with your actual image path
              alt="Sohom Sarkar"
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover' 
              }}
            />
          </div>
            
          <h3 style={{ 
            margin: '0 0 0.5rem 0', 
            fontSize: '18px', 
            fontWeight: 'bold', 
            textAlign: 'center' 
          }}>
            Sohom Sarkar
          </h3>
        
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '10px', 
            marginTop: '0.5rem' 
          }}>
            <a href="#" style={{ color: '#2563eb' }}>
              {/* LinkedIn Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm12.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" style={{ color: '#2563eb' }}>
              {/* GitHub Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
        

          {/* Team Member 2 */}
          <div style={{ 
            width: '200px', 
            border: '1px solid #e5e7eb', 
            borderRadius: '8px', 
            padding: '1.5rem', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            backgroundColor: 'white'
          }}>
          <div style={{ 
            width: '120px', 
            height: '120px', 
            marginBottom: '1rem', 
            overflow: 'hidden', 
            borderRadius: '4px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}>
            <img 
              src="./sambhav.jpg" // <-- Replace this with your actual image path
              alt="Sohom Sarkar"
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover' 
              }}
            />
          </div>
            <h3 style={{ 
              margin: '0 0 0.5rem 0', 
              fontSize: '18px', 
              fontWeight: 'bold', 
              textAlign: 'center' 
            }}>
              Sambhav Jha
            </h3>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '10px', 
              marginTop: '0.5rem' 
            }}>
              <a href="#" style={{ color: '#2563eb' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm12.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" style={{ color: '#2563eb' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>

          {/* Team Member 3 */}
          <div style={{ 
            width: '200px', 
            border: '1px solid #e5e7eb', 
            borderRadius: '8px', 
            padding: '1.5rem', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            backgroundColor: 'white'
          }}>
          <div style={{ 
            width: '120px', 
            height: '120px', 
            marginBottom: '1rem', 
            overflow: 'hidden', 
            borderRadius: '4px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}>
            <img 
              src="./mrudhul.jpg" // <-- Replace this with your actual image path
              alt="Sohom Sarkar"
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover' 
              }}
            />
          </div>
            <h3 style={{ 
              margin: '0 0 0.5rem 0', 
              fontSize: '18px', 
              fontWeight: 'bold', 
              textAlign: 'center' 
            }}>
              Tula Mrudhul
            </h3>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '10px', 
              marginTop: '0.5rem' 
            }}>
              <a href="#" style={{ color: '#2563eb' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm12.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" style={{ color: '#2563eb' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>

          {/* Team Member 4 */}
          <div style={{ 
            width: '200px', 
            border: '1px solid #e5e7eb', 
            borderRadius: '8px', 
            padding: '1.5rem', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            backgroundColor: 'white'
          }}>
          <div style={{ 
            width: '120px', 
            height: '120px', 
            marginBottom: '1rem', 
            overflow: 'hidden', 
            borderRadius: '4px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}>
            <img 
              src="./aditya.jpg" // <-- Replace this with your actual image path
              alt="Sohom Sarkar"
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover' 
              }}
            />
          </div>
            <h3 style={{ 
              margin: '0 0 0.5rem 0', 
              fontSize: '18px', 
              fontWeight: 'bold', 
              textAlign: 'center' 
            }}>
              Aditya Jha
            </h3>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '10px', 
              marginTop: '0.5rem' 
            }}>
              <a href="#" style={{ color: '#2563eb' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm12.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" style={{ color: '#2563eb' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>

          {/* Team Member 5 */}
          <div style={{ 
            width: '200px', 
            border: '1px solid #e5e7eb', 
            borderRadius: '8px', 
            padding: '1.5rem', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            backgroundColor: 'white'
          }}>
          <div style={{ 
            width: '120px', 
            height: '120px', 
            marginBottom: '1rem', 
            overflow: 'hidden', 
            borderRadius: '4px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}>
            <img 
              src="./rudra.jpg" // <-- Replace this with your actual image path
              alt="Sohom Sarkar"
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover' 
              }}
            />
          </div>
            <h3 style={{ 
              margin: '0 0 0.5rem 0', 
              fontSize: '18px', 
              fontWeight: 'bold', 
              textAlign: 'center' 
            }}>
              Rudra Kokhani
            </h3>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '10px', 
              marginTop: '0.5rem' 
            }}>
              <a href="#" style={{ color: '#2563eb' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm12.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" style={{ color: '#2563eb' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for the additional sections */}
      <style jsx>{`
        .section {
          margin: 3rem 0;
        }
        
        .section-heading {
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: #111827;
          text-align: center;
        }
        
        .results-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }
        
        .result-card {
          background-color: white;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 1.5rem;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        
        .result-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        
        .result-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          color: #111827;
        }
        
        .result-text {
          color: #4b5563;
          line-height: 1.5;
        }
        
        .research-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #1f2937;
          line-height: 1.6;
        }
        
        .header {
          text-align: center;
          margin-bottom: 3rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid #e5e7eb;
        }
        
        .title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #111827;
          margin-bottom: 0.5rem;
        }
        
        .conference {
          font-size: 1.25rem;
          color: #4b5563;
          margin-bottom: 1.5rem;
        }
        
        .authors {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        
        .affiliations {
          margin-bottom: 1.5rem;
          font-size: 0.875rem;
          color: #4b5563;
        }
        
        .links {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
        }
        
        .link {
          color: #2563eb;
          text-decoration: none;
          transition: color 0.2s;
        }
        
        .link:hover {
          color: #1d4ed8;
          text-decoration: underline;
        }
      `}</style>

      <div className="section">
          <h2 className="section-heading">Acknowledgment</h2>
          <p>
            This work is supported by Prof. Anand Mishra from the Department of Computer Science and Engineering, IIT Jodhpur. We would like to thank him for his guidance and support throughout this project. We would also like to acknowledge the help provided by the esteemed professors of Department of Electrical Engineering, IIT Jodhpur.
          <br/>
          </p>
      </div>

      <div className="section">
        <h2 className="section-heading">Contact</h2>
            <p>
              For questions, please raise an issue on <a href="https://github.com/Sohom-Sarkar/PRML_25_proj" className="link">GitHub</a>.
            </p>
      </div>
            
    
    </div>
  );
}