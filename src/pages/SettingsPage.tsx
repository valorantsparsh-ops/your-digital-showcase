import { motion } from "framer-motion";
import { Settings, Database, Trash2, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useState, useEffect } from "react";

interface StorageItem {
  key: string;
  value: string;
  displayName: string;
}

const SettingsPage = () => {
  const { toast } = useToast();
  const [storageItems, setStorageItems] = useState<StorageItem[]>([]);
  const [savedName, setSavedName] = useLocalStorage('contact_name', '');
  const [savedEmail, setSavedEmail] = useLocalStorage('contact_email', '');

  const knownKeys: Record<string, string> = {
    'contact_name': 'Contact Name',
    'contact_email': 'Contact Email',
  };

  const loadStorageItems = () => {
    const items: StorageItem[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && knownKeys[key]) {
        const value = localStorage.getItem(key) || '';
        items.push({
          key,
          value: value.replace(/^"|"$/g, ''), // Remove JSON quotes
          displayName: knownKeys[key],
        });
      }
    }
    setStorageItems(items);
  };

  useEffect(() => {
    loadStorageItems();
  }, [savedName, savedEmail]);

  const handleClearItem = (key: string) => {
    localStorage.removeItem(key);
    if (key === 'contact_name') setSavedName('');
    if (key === 'contact_email') setSavedEmail('');
    loadStorageItems();
    toast({
      title: "Cleared",
      description: `${knownKeys[key]} has been removed.`,
    });
  };

  const handleClearAll = () => {
    Object.keys(knownKeys).forEach(key => {
      localStorage.removeItem(key);
    });
    setSavedName('');
    setSavedEmail('');
    loadStorageItems();
    toast({
      title: "All cleared",
      description: "All saved data has been removed.",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <BackgroundEffects />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 relative z-10">
          {/* Page Header */}
          <ScrollAnimationWrapper className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Settings className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground uppercase tracking-widest">
                Preferences
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Settings</h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              View and manage your saved preferences and local storage data.
            </p>
          </ScrollAnimationWrapper>

          <div className="max-w-2xl mx-auto">
            {/* Local Storage Section */}
            <ScrollAnimationWrapper>
              <div className="glass-card rounded-xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Database className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold">Local Storage</h3>
                      <p className="text-sm text-muted-foreground">Data saved in your browser</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={loadStorageItems}
                    className="hover:bg-primary/10"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </Button>
                </div>

                {storageItems.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-8 text-muted-foreground"
                  >
                    <Database className="w-12 h-12 mx-auto mb-3 opacity-30" />
                    <p>No saved data yet</p>
                    <p className="text-sm">Fill out the contact form to save your info</p>
                  </motion.div>
                ) : (
                  <div className="space-y-3">
                    {storageItems.map((item, index) => (
                      <motion.div
                        key={item.key}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 border border-border/50"
                      >
                        <div>
                          <p className="text-sm text-muted-foreground">{item.displayName}</p>
                          <p className="font-medium">{item.value || <span className="text-muted-foreground italic">Empty</span>}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleClearItem(item.key)}
                          className="hover:bg-destructive/10 hover:text-destructive"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                )}

                {storageItems.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-6 pt-6 border-t border-border/50"
                  >
                    <Button
                      variant="outline"
                      onClick={handleClearAll}
                      className="w-full text-destructive hover:bg-destructive/10 hover:text-destructive border-destructive/30"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Clear All Saved Data
                    </Button>
                  </motion.div>
                )}
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SettingsPage;
