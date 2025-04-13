import matplotlib.pyplot as plt

# Sample data
cores = [16, 64, 256]
latency = {'Mesh': [10.2, 23.5, 52.4], 'Torus': [9.8, 19.3, 40.7], 'Bus': [7.0, 85.0, 400]}
throughput = {'Mesh': [0.85, 0.68, 0.45], 'Torus': [0.87, 0.75, 0.62], 'Bus': [0.98, 0.35, 0.10]}

# Latency Plot
plt.figure(figsize=(8,5))
for topo in latency:
    plt.plot(cores, latency[topo], marker='o', label=topo)
plt.xlabel("Number of Cores")
plt.ylabel("Average Latency (ns)")
plt.title("NoC Topology vs Latency")
plt.legend()
plt.grid(True)
plt.savefig("noc_latency.png")
plt.show()

# Throughput Plot
plt.figure(figsize=(8,5))
for topo in throughput:
    plt.plot(cores, throughput[topo], marker='o', label=topo)
plt.xlabel("Number of Cores")
plt.ylabel("Throughput (Packets / Cycle)")
plt.title("NoC Topology vs Throughput")
plt.legend()
plt.grid(True)
plt.savefig("noc_throughput.png")
plt.show()
