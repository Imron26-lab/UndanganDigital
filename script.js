        // Fungsi untuk masuk ke undangan (hide intro, show main)
        function enterInvitation() {
            const intro = document.getElementById('intro-cover');
            const container = document.getElementById('main-container');
            const nav = document.getElementById('nav-buttons');
            intro.classList.add('hidden');
            setTimeout(() => {
                container.classList.add('show');
                nav.style.display = 'flex';
            }, 1000);
        }

        // Fungsi untuk pindah ke section berikutnya
        function nextSection(nextId) {
            const currentSections = document.querySelectorAll('.section.show');
            currentSections.forEach(section => section.classList.remove('show'));
            const nextSection = document.getElementById(nextId);
            if (nextSection) {
                nextSection.classList.add('show');
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        }

        // Fungsi untuk scroll ke section tertentu (untuk navigasi tombol)
        function scrollToSection(sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                // Sembunyikan semua section kecuali yang dipilih
                const allSections = document.querySelectorAll('.section');
                allSections.forEach(section => section.classList.remove('show'));
                element.classList.add('show');
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }

        // Countdown Timer
        const targetDate = new Date('2026-05-31T00:00:00').getTime();
        const countdownElement = document.getElementById('countdown');

        function updateCountdown() {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance > 0) {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            } else {
                countdownElement.innerHTML = "Hari Bahagia Telah Tiba!";
            }
        }

        setInterval(updateCountdown, 1000);
        updateCountdown();